import React from 'react';
import { useEffect } from 'react';
import {  useCustomElementRef,fluid } from './../fluid'; // Replaced by @lmig/fluid-react-utils

function FluidUpload(config:any) {
    
 // ---- Initialise FLUID
let env:any = fluid.environments.external;
useEffect(() => fluid.init(env));
// ---- Start Building

const selectRef = useCustomElementRef(
  {
    fileListUpdated: (eventData:any) => fileUploaded(eventData),
  },
  {
    ...config,
    // initialValue: config.initialValue.favFlavor,
    acceptMultiple: false,
    acceptFileTypes: ['application/json'],
  }
);
const fileUploaded = (eventData:any) => {
  if (eventData.detail) {
    console.log(eventData.detail);
    const uFile = eventData.detail[0];
    if (uFile.type !== 'application/json') {
      alert('Only JSON file accepted');
    } else {
      console.log(uFile);
    }
  }
};
// useEffect(() => {
//   const { favFlavor } = config.initialValue;
//   if (selectRef?.current?.setValue && !!favFlavor) {
//     selectRef.current
//       .setValue(favFlavor)
//       .then(() => selectRef.current.markTouchedAndValidate());
//   }
// }, [config.initialValue]);

  return (
    <div>
    <fluid-tabs>
      <fluid-tab title="Search" active>
        {/* <!-- Search Content -->*/}
        You are on search tab!
      </fluid-tab>
      <fluid-tab title="Upload AnswerSheet">
        {/*<!-- Upload Content -->*/}
        You are on upload tab!
      </fluid-tab>
    </fluid-tabs>
    <fluid-file-upload ref={selectRef}></fluid-file-upload>
    </div>
  );
};

export default FluidUpload;