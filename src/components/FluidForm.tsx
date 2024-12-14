import React from 'react';
import { useCustomElementRef, fluid } from './../fluid'; // Replaced by @lmig/fluid-react-utils
import { useEffect,useState } from 'react';
//built-in fetch API or a library like axios
function FluidForm() {
    
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
              const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST', // HTTP method
                headers: {
                  'Content-Type': 'application/json', // Ensures JSON content
                },
                body: JSON.stringify(event.detail.data.redactedValue), // Convert JavaScript object to JSON string
              });
        
              const result = await res.json(); // Parse the response JSON
              console.log(result);
              setResponse(result);
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
            validation,
            controlName: 'textInput',
          },
          {
            dataPath: 'currencyInput',
            label: 'My Currency Input',
            type: 'currency',
            controlName: 'currencyInput',
          },
          {
            dataPath: 'dateInput',
            label: 'My Date Input',
            type: 'date',
            controlName: 'dateInput',
          },
          {
            dataPath: 'numberInput',
            label: 'My Number Input',
            type: 'number',
            validation,
            controlName: 'numberInput',
          },
          {
            dataPath: 'phoneNumbers',
            controlName: 'phoneNumberForm',
            elementType: 'array',
            controlConfig: {
              add: {
                label: 'Add Number',
              },
            },
            disableAddUntilValid: false,
            entryLabel: () => '',
    
            formConfig: {
              formName: 'phoneNumbersForm',
              /*
              layout: 'row',
              rowOptions: [
                {
                  rowId: 1,
                  columnOptions: [
                    { columnId: 1, colSpan: 3 },
                    { columnId: 2, colSpan: 3 },
                    { columnId: 3, colSpan: 1 },
                    { columnId: 4, colSpan: 1 },
                    { columnId: 5, colSpan: 3 },
                    { columnId: 6, colSpan: 1 },
                    { columnId: 7, colSpan: 0 },
                  ],
                },
              ],
              */
              elements: [
                // PhoneNumberTypeSelect(1, 1),
                // CountrySelect(1, 2),
                {
                  dataPath: 'countryPhoneCode',
                  controlName: 'countryPhoneCode',
                  label: 'Country Code',
                  elementType: `input`,
                  type: `number`,
                  displayStepperButtons: false,
                  readonly: true,
                  wholeOnly: true,
                  inlineField: true,
                  initialValue: 'Country Code',
                  //dynamicValue: '55',
                  maskingConfig: {
                    blurDelay: 0,
                    maskingFn: (value:any) => `+ ${value}`,
                  },
                  gridRow: 1,
                  gridColumn: 3,
                },
                {
                  dataPath: 'areaCode',
                  controlName: 'areaCode',
                  label: 'Area Code',
                  elementType: `input`,
                  type: `number`,
                  displayStepperButtons: false,
                  wholeOnly: true,
                  inlineField: true,
                  allowCancel: true,
                  //dynamicConfig: areaValidation,
                  gridRow: 1,
                  gridColumn: 4,
                },
                {
                  dataPath: 'phoneNumber',
                  controlName: 'phoneNumber',
                  label: 'Phone Number',
                  elementType: `input`,
                  type: `number`,
                  displayStepperButtons: false,
                  //dynamicConfig: dynamicValidation,
                  allowCancel: true,
                  wholeOnly: true,
                  gridRow: 1,
                  gridColumn: 5,
                },
                {
                  dataPath: 'extension',
                  controlName: 'extension',
                  label: 'Ext',
                  elementType: `input`,
                  type: `number`,
                  displayStepperButtons: false,
                  allowCancel: true,
                  wholeOnly: true,
                  gridRow: 1,
                  gridColumn: 6,
                },
                {
                  label: 'Hidden Input type',
                  dataPath: 'id',
                  controlName: 'id',
                  elementType: `hidden`,
                  type: `number`,
                  gridRow: 1,
                  gridColumn: 7,
                },
                {
                  dataPath: 'isDeletedInd',
                  controlName: 'isDeletedInd',
                  initialValue: false,
                  elementType: `hidden`,
                  gridRow: 1,
                  gridColumn: 7,
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

export default FluidForm;