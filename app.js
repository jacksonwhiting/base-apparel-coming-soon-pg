const emailAddr = document.querySelector("#js-email-addr");
const warnIcon = document.querySelector("#js-warn-icon");
const emailAlert = document.querySelector("#js-email-alert");
const emailSubmitBtn = document.querySelector('#js-email-submit');

const clearMessages = (emailAlert, warnIcon) => {
   emailAlert.innerText = "";
   warnIcon.classList.add("js-hide");
};

const showInvalidMessages = (emailAlert, warnIcon) => {
   emailAlert.innerText = "Please provide a valid email";
   warnIcon.classList.remove("js-hide");
};

const validateEmail = (emailAddr) => {
      return emailAddr.validity.valid;
};

const handleEmailInput = (emailAlert, warnIcon, emailAddr) => {
   emailSubmitBtn.addEventListener("click", (e) => {
      clearMessages(emailAlert, warnIcon);
      if (!validateEmail(emailAddr)) {
         e.preventDefault();
         showInvalidMessages(emailAlert, warnIcon);
      }
   })
}

handleEmailInput(emailAlert, warnIcon, emailAddr);


