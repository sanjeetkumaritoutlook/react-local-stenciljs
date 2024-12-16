export const formSchema = {
    "fields":[
    { "type": "text", "name": "username", "label": "Username", "placeholder": "Enter username", "required": true },
    { "type": "date", "name": "dob", "label": "Date of Birth", "required": true },
    { "type": "checkbox", "name": "subscribe", "label": "Subscribe", "required": false },
    { "type": "radio", "name": "gender", "label": "Gender", "options": [{ "label": "Male", "value": "male" }, { "label": "Female", "value": "female" }], "required": true },
    { "type": "select", "name": "country", "label": "Country", "options": [{ "label": "USA", "value": "usa" }, { "label": "India", "value": "india" }], "required": true },
    {
      "type": "array",
      "name": "experiences",
      "label": "Work Experiences",
      "required": false,
      "items": [
        {
          "type": "text",
          "name": "companyName",
          "label": "Company Name",
          "required": true
        },
        {
          "type": "date",
          "name": "startDate",
          "label": "Start Date",
          "required": true
        },
        {
          "type": "date",
          "name": "endDate",
          "label": "End Date",
          "required": true
        },
        {
          "type": "select",
          "name": "role",
          "label": "Role",
          "options": [
            { "label": "Developer", "value": "developer" },
            { "label": "Designer", "value": "designer" },
            { "label": "Manager", "value": "manager" }
          ],
          "required": true
        }
      ]
    },
    {
        "type": "date",
        "name": "Proposaldate",
        "label": "Proposal Date",
        "required": true
      },
      { "type": "radio", "name": "insurance", "label": "Global insurance companies", "options": [{ "label": "Liberty Mutual", "value": "Liberty Mutual" }, { "label": "All States", "value": "All States" },{ "label": "Farmers", "value": "Farmers" }], "required": true },
   
      { "type": "textarea",  "name": "comments",  "label": "Comments",   "placeholder": "Write your comments here...","maxLength": 200,   "minLength": 0,  "errorMessage": "Comments must be between 0 and 200 characters.",  "conditionalOn": { "field": "gender", "value": "female" }  },
    {  "type": "combo-box", "name": "favoriteFruit", "label": "Favorite Fruit",   "placeholder": "Type or select a fruit...",  "required": true,   "options": [     { "label": "Apple", "value": "apple" },     { "label": "Banana", "value": "banana" },   { "label": "Cherry", "value": "cherry" }   ]},
    {  "type": "my-rich-text-editor",   "name": "bio",  "label": "Bio", "placeholder": "Write your biography..."}
  ]}