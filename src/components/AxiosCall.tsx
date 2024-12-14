import React from 'react';
import { useCustomElementRef, fluid } from './../fluid'; // Replaced by @lmig/fluid-react-utils
import { useEffect,useState } from 'react';
//built-in fetch API or a library like axios
//npm i axios
import axios from 'axios';

function AxiosCall() {
    
 // ---- Initialise FLUID
let env:any = fluid.environments.external;
useEffect(() => fluid.init(env));
//since its typescript, cannot use with empty dependency
//useEffect(() => fluid.init(env), []);
// ---- Start Building
const [response, setResponse] = useState(null);

const validation = [
    {
      type: 'required',
      value: true,
      message: 'This is a required field.',
    },
  ];
const fluidFormRef = useCustomElementRef(
    {  valueChanged: (event:any) => {
        console.log('value changed');
      },
      formChanged: (event:any) => {
        console.log(event.detail);
      },
      actionClicked: (event:any) => {
        console.log(event.detail.data.redactedValue);
        const sendData = async () => {        
            try {
                const res = await axios.post('https://jsonplaceholder.typicode.com/posts', event.detail.data.redactedValue, {
                  headers: {
                    'Content-Type': 'application/json', // Ensures JSON content
                  },
                });
          
                console.log(res.data);
                setResponse(res.data);
              } catch (error) {
                console.error('Error:', error);
              }
          };
        sendData();
      },
    },
    {
      config: {
        layout: 'vertical',
        elements: [
            {
              dataPath: 'textInput',
              label: 'My Text Input',
              type: 'input',
              controlName: 'textInput',
              validation,
            },
            {
              dataPath: 'array',
              label: 'Array Section',
              elementType: 'array',
  
              constraints: {
                minimumEntries: 2,
                maximumEntries: 8,
              },
  
              initialValue: [
                { phoneNumber: '(801) 999-9999' },
                { phoneNumber: '(801) 222-2222' },
              ],
  
              controlName: 'array',
              formConfig: {
                allowDeleteForm: (data: {
                  redactedValue?: { phoneNumber: number };
                }) => {
                  const test = !data?.redactedValue?.phoneNumber;
                  //console.log('data::', data, test);
                  return test;
                },
  
                elements: [
                  {
                    dataPath: 'phoneNumber',
                    label: 'phone',
                    type: 'input',
                    controlName: 'phoneNumber',
                  },
                ],
              },
            },
          ],
        submitConfig: {
            actionText: 'Save',
            actionKey: 'formSubmitted',
          },
          cancelConfig: {
            actionText: 'Cancel',
            actionKey: 'formCancelled',
            displayDialogBeforeAction: true,
          },
      },
    }
  );
  console.log('fluidFormRef', fluidFormRef);

//   const btRef = useCustomElementRef(
//     {
//       click: async () => {
//         console.log('click', fluidFormRef);
//        const test = await fluidFormRef.current.markTouchedAndValidate();
//         console.log('test');
//       },
//     },
//     { label: 'Test useCustomElementRef.current' }
//   );
return (
    <div>
          <fluid-text>Your Code Here</fluid-text>
          <fluid-form ref={fluidFormRef}></fluid-form>
          {response && <pre>Response: {JSON.stringify(response, null, 2)}</pre>}
    </div>
);
}

export default AxiosCall;