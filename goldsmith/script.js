const firstnameElem = document.getElementById("firstname");
const lastnameElem = document.getElementById("lastname");
const emailElem = document.getElementById("email");
const passwordElem = document.getElementById("password");
const password2Elem = document.getElementById("password2");
const firstnameErrorElem = document.getElementById("firstname-error");
const lastnameErrorElem = document.getElementById("lastname-error");
const emailErrorElem = document.getElementById("email-error");
const passwordErrorElem = document.getElementById("password-error");
const password2ErrorElem = document.getElementById("password2-error");
const formElem = document.getElementById("form");

console.log(firstnameElem);

// add event listener to the form element
formElem.addEventListener("submit", (event)=>{

    const emailRegExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z] {2,4})$/;

    //trim out space from the input data
    const firstnamevalue = firstnameElem.value.trim();
    const lastnamevalue = lastnameElem.value.trim();
    const emailnamevalue = emailElem.value.trim();
    const passwordvalue = passwordElem.value.trim();
    const password2value = password2Elem.value.trim();

    //validating the firstname
    if(firstnamevalue=== "" || firstnamevalue == null){
        event.preventDefault();
        firstnameErrorElem.innerHTML = "your firstname is required";
    }

    //validating the lastname
    if(firstnamevalue=== "" || firstnamevalue == null){
        event.preventDefault();
        lastnameErrorElem.innerHTML = "your lastname is required";
    }

    //validating the email
    if(firstnamevalue=== "" || firstnamevalue == null){
        event.preventDefault();
        EmailErrorElem.innerHTML = "enter a valid email address";
    }

    if(passwordvalue=== ""  ) { 
        event.preventDefault();
        passwordErrorElem.innerHTML = "password cannot be empty";
    }
    
    if(passwordvalue <=8){
        event.preventionDefault();
        passwordErrorElem.innerHTML ="password must be longer than 8 characters";
    }

    if(passwordvalue >=15){
        event.preventDefault();
        passwordErrorElem.innerHTML ="password must be longer than 15 characters";
    }

    if(password2value  !== passwordvalue) {
        event.preventDefault();
        password2ErrorElem.innerHTML ="password doesn't match";
    }
    
    
    
})
