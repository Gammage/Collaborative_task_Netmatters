///save the data to an array in local storage?

// localStorage.setItem("username", "marijn");
// console.log(localStorage.getItem("username"));
// // → marijn
// localStorage.removeItem("username");

//use JS objects - have an array of objects (submission)
//submit button - add event listener. 
//may need a separate function for each field. returns true or false for each field.
//if all true then create the object to store the data and push it to the array
// console log valid / invalid
//console log the text fields
//maybe have a popup 'submission successful'


const submitButton = document.querySelector("#button-div button");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const messageInput = document.querySelector("#message");
const privacyInput = document.querySelector("#gdpr");

let formSubmissions = [];

let submittedData = {
    name: nameInput.value, 
    email: emailInput.value, 
    phone: phoneInput.value,
    message: messageInput.value,
};



document.addEventListener('DOMContentLoaded', () => {
    //The form data that has been submitted will print to the console so that you can see that it has saved
    console.log(localStorage.getItem('formData'));


    //to add JSON.parse()
    //On refresh the form submissions array is being reset. So the new object is being pushed to an empty array.
    const storageFormData = localStorage.getItem('formData');
    
    //if there is already storageForm Data then need to save this to the formSubmissions array
    if(formSubmissions.value === null) {
        console.log('there is no local data yet');
    } else {
        formSubmissions = [{storageFormData}];
    }
})

submitButton.addEventListener('click', (event) => {
    submittedData = {
        name: nameInput.value, 
        email: emailInput.value, 
        phone: phoneInput.value,
        message: messageInput.value,
    };

    if(nameInput.validity.valid && emailInput.validity.valid && phoneInput.validity.valid && messageInput.validity.valid && privacyInput.checked == true) {
       
        //adds the new data to the existing data stored in the formSubmissions array
        formSubmissions.push(submittedData);
        //saves the updated formSubmissions array in local storage so that both the current and previous form data can be viewed
        localStorage.setItem("formData", JSON.stringify(formSubmissions));
        alert('form submitted');
    }
});


//may come back to
 //event.preventDefault();


