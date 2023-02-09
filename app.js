const emailAddr = document.querySelector("#js-email-addr");
const warnIcon = document.querySelector("#js-warn-icon");
const emailAlert = document.querySelector("#js-email-alert");
const emailSubmitBtn = document.querySelector('#js-email-submit');

//Clears any warnings present
const clearInvalidMessages = (emailAlert, warnIcon) => {
   emailAlert.innerText = "";
   warnIcon.classList.add("js-hide");
   emailAddr.classList.remove("js-email-invalid");
};

//Displays a warning icon and warning message
const showInvalidMessages = (emailAlert, warnIcon) => {
   emailAlert.innerText = "Please provide a valid email";
   warnIcon.classList.remove("js-hide");
};

// Validates e-mail address using pattern REGEX on html. If pattern
// mismatch, validity.valid property will be false
const validateEmail = (emailAddr) => {
      return emailAddr.validity.valid;
};

//When user clicks the submit button, clears messages, validates e-mail and shows invalid messages
const handleEmailInput = (emailAlert, warnIcon, emailAddr) => {
   emailSubmitBtn.addEventListener("click", (e) => {
      clearInvalidMessages(emailAlert, warnIcon);
      if (!validateEmail(emailAddr)) {
         e.preventDefault();
         showInvalidMessages(emailAlert, warnIcon);
         emailAddr.classList.add("js-email-invalid");
      }
   })
}

handleEmailInput(emailAlert, warnIcon, emailAddr);


