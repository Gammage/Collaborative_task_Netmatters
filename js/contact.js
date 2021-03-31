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

const formSubmissions = [];

document.addEventListener('DOMContentLoaded', () => {
    //The form data that has been submitted will print to the console so that you can see that it has saved
    console.log(localStorage.getItem('formData'));
})

submitButton.addEventListener('click', () => {
    //TESTING that query selectors are working and obtaining the values.
    // console.log(nameInput.value); //gets text input
    // console.log(emailInput.value); //gets text input
    // console.log(phoneInput.value); //gets text input
    // console.log(messageInput.value); //gets text input
    //console.log(privacyInput.checked); //returns if the checkbox is checked, either true or false

    const submittedData = {
        name: nameInput.value, 
        email: emailInput.value, 
        phone: phoneInput.value,
        message: messageInput.value
    };

    //adds the new data to the existing data stored in the formSubmissions array
    formSubmissions.push(submittedData);

    localStorage.setItem("formData", JSON.stringify(formSubmissions));

    console.log(formSubmissions);

    // if(nameInput:valid) {
    //     alert('form submitted');
    // }
});





// document.addEventListener("DOMContentLoaded", ()=> {
//     const cookiesSaved = localStorage.getItem('cookiesAccepted');

//     cookiesButton.addEventListener('click', () => {
//         //accesses the current domain's local Storage object and adds a data item to it.
//         myStorage.setItem('cookiesAccepted', 'yes')



// Storage.prototype.setObj = function(key, obj) {
//     return this.setItem(key, JSON.stringify(obj))
// }
// Storage.prototype.getObj = function(key) {
//     return JSON.parse(this.getItem(key))
// }