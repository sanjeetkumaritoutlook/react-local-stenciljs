//import * as React from 'react';
import React , {useRef,useEffect} from 'react';
import { formSchema } from './../utils/form-schema'; // Import schema
import {HTMLJsonSchemaFormElement} from './../structs/interfaces/json-schema.interface'
//import { useNavigate,useParams } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
 function LibraryComponents() {
    // Define the ref with the specific type for `json-schema-form`
  // const formRef = useRef<any>(null);
const formRef = useRef<HTMLJsonSchemaFormElement>(null);

 // Use useEffect to set complex props
 useEffect(() => {
  if (formRef.current) {
     // Safely set the schema property
    formRef.current.schema = JSON.stringify(formSchema); // Pass schema directly
  }
}, []);
  return (
    <div>
    <h1>from 'stenciljs-components' npm package</h1>
     {/* Attach a typed ref */}
    <json-schema-form 
     ref={formRef} ></json-schema-form> 
    <my-pie-chart  data='[{"tag":"height","value":180},{"tag":"weight","value":75},{"tag":"age","value":30},{"tag":"score","value":95},{"tag":"yearsExperience","value":5}]'></my-pie-chart>
    <my-progress-ring percentage="30"></my-progress-ring>
    <custom-form></custom-form>
  
    </div>
  );
}

export default  LibraryComponents;