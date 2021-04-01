
//use JS objects - have an array of objects (one object = one submitted form)
//submit button - add event listener. 
//if all true then store the data and push it to the array
//add a popup 'submission successful'


const submitButton = document.querySelector("#button-div button");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const messageInput = document.querySelector("#message");
const privacyInput = document.querySelector("#gdpr");
const successMessage = document.querySelector(".form-submitted");
const contactSection = document.querySelector("#contact-us");

let formSubmitted = localStorage.getItem('form-submitted'); //Has the form been submitted? This is a true/false value that has to be saved to local storage otherwise it is lost on refresh
let formSubmissions = []; //an array containing an objects of form data (one for each form submission)
let submittedData = {      //the data saved to each object
    name: nameInput.value, 
    email: emailInput.value, 
    phone: phoneInput.value,
    message: messageInput.value,
};


//////////////////////////////////////////////////////////////////////////////////////////////
//WHEN THE PAGE LOADS

document.addEventListener('DOMContentLoaded', () => {
    //On refresh the form submissions array is reset. This means that new object is being pushed to an empty array which is why...
    //if there is alreay data saved in local storage then this needs to be retrieved and saved.
    const storageFormData = localStorage.getItem('formData');
    const parsedStorageFormData = JSON.parse(storageFormData);
    console.log(storageFormData);
    
    //save the storageFormData to the formSubmissions array
    formSubmissions.push(parsedStorageFormData);

    //The form data that has been submitted will print to the console so that you can see that it has saved
    //console.log(parsedStorageFormData);
    console.log(formSubmissions);


    //hide the success message (if displayed) after a certain amount of time
    if(formSubmitted === "false") {           //it is in "" because it is saved as a string in local storage
        successMessage.style.display = "none";
    } else if(formSubmitted === "true") {     //it is in "" because it is saved as a string in local storage
        successMessage.style.display = "flex";
        contactSection.style.marginTop = "50px";
        setTimeout( () => { 
            successMessage.style.transform = "translateY(-50px)"
            contactSection.style.transition = "all 1.5s ease-out"; //margin transition
            contactSection.style.marginTop = "0px";
            formSubmitted = false;
            localStorage.setItem("form-submitted", formSubmitted);
        }, 5000);
        setTimeout( () => { 
            successMessage.style.display = "none";
        }, 7000);
    }
})

////////////////////////////////////////////////////////////////////////////////////////
//WHEN THE FORM IS SUBMITTED

submitButton.addEventListener('click', (event) => {
    submittedData = {
        name: nameInput.value, 
        email: emailInput.value, 
        phone: phoneInput.value,
        message: messageInput.value,
    };

    //IF INPUT IS VALID AND THE DATA CAN BE SUBMITED DO THIS. Otherwise the default HTML validation will do its thing.
    if(nameInput.validity.valid && emailInput.validity.valid && phoneInput.validity.valid && messageInput.validity.valid && privacyInput.checked == true) {
        //adds the new data to the existing data stored in the formSubmissions array
        formSubmissions.push(submittedData);
        //saves the updated formSubmissions array in local storage so that both the current and previous form data can be viewed
        localStorage.setItem("formData", JSON.stringify(formSubmissions));
        formSubmitted = true;
        localStorage.setItem("form-submitted", formSubmitted);
        //alert('form submitted'); for testing.
    }
});
