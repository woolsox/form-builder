// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
//( function(){
//  // Select the first element from the array
//  let first = formData[ 0 ];
//  // Log the first object
//  console.log( first );
//  // Log the string "First Name"
//  console.log( first.label );
//} )();


// -------- Your Code Goes Below this Line --------


let fields = document.getElementById('fields');
let inputFirst = document.createElement('input');
let inputLast = document.createElement('input');
let inputEmail = document.createElement('input');
let inputWebsite = document.createElement('input');
let selectLang = document.createElement('select');
let selectLangFirst = document.createTextNode('Select Language...');
let selectLangOptFirst = document.createElement('option');
let selectId = document.getElementById('user-language')
let selectIdOpt = document.createElement('option');


// First Name

for (let i = 0; i < formData.length; i++) {
    if (formData[i].type === "text" && formData[i].id === "user-first-name" && formData[i].label === "First Name" ) {
        inputFirst.setAttribute('type', formData[i].type);
        inputFirst.setAttribute('id', formData[i].id); 
        inputFirst.setAttribute('placeholder', formData[i].label); 
    }
}

fields.appendChild(inputFirst);

// Last Name

for (let i = 0; i < formData.length; i++) {
    if (formData[i].type === "text" && formData[i].id === "user-last-name" && formData[i].label === "Last Name" ) {
        inputLast.setAttribute('type', formData[i].type);
        inputLast.setAttribute('id', formData[i].id); 
        inputLast.setAttribute('placeholder', formData[i].label); 
    }
}

fields.appendChild(inputLast);

// Email Address

for (let i = 0; i < formData.length; i++) {
    if (formData[i].type === "email" && formData[i].id === "user-email" && formData[i].label === "Email Address" ) {
        inputEmail.setAttribute('type', formData[i].type);
        inputEmail.setAttribute('id', formData[i].id); 
        inputEmail.setAttribute('placeholder', formData[i].label); 
    }
}

fields.appendChild(inputEmail);

// User Website

for (let i = 0; i < formData.length; i++) {
    if (formData[i].type === "text" && formData[i].id === "user-website" && formData[i].label === "Current Website URL" ) {
        inputWebsite.setAttribute('type', formData[i].type);
        inputWebsite.setAttribute('id', formData[i].id); 
        inputWebsite.setAttribute('placeholder', formData[i].label); 
    }
}

fields.appendChild(inputWebsite);

// Language

for (let i = 0; i < formData.length; i++) {
    if (formData[i].type === "select" && formData[i].id === "user-language") {
        selectLang.setAttribute('type', formData[i].type);
        selectLang.setAttribute('id', formData[i].id);  
    }
}

fields.appendChild(selectLang);

// Language options

selectLangOptFirst.appendChild(selectLangFirst);
selectLang.appendChild(selectLangOptFirst);

// that's how you get the select Language option to appear first. Make an
// additional option and then append to the select element, then make your list (below)

for (let i = 0; i < formData.length; i++) {
    if (formData[i].label === "Select Language") {
    } for (let f = 0; f < formData[i].options.length; f++) {
        selectIdOpt.setAttribute('label', formData[i].options[f].label);
        selectIdOpt.setAttribute('value', formData[i].options[f].value);     
    }     
}

selectId.appendChild(selectIdOpt);