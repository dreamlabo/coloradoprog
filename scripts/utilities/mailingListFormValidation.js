const mailingListForm = document.getElementById("mailing-list-form");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const tellUsInput = document.getElementById("tell-us-input");
const errorMessageFields = document.getElementsByClassName("mailing-list-form--error");
const formHoneypot = document.getElementById("form-honeypot");
const successMessage = document.getElementById("mailing-list-success");
const submitButton = document.getElementById("mailing-list-form-btn");
const infoBox = document.getElementById("info-box");
let isInfoBoxOpen = false;

const infoIcon = document.getElementById("info-icon");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

infoIcon.addEventListener('click', clickOpenInfoBox);
infoIcon.addEventListener('keypress', keypressOpenInfoBox);

mailingListForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let focusElement = null;
    let isErrorFree = true;
    
    for(let i = 0; i < errorMessageFields.length; i++) {
        errorMessageFields[i].classList.remove("error-visible");
    }

    if(formHoneypot.value !== "") {
        return;
    }

    // check if name is empty
    if(nameInput.value.trim() === "") {
        isErrorFree = false;
        errorMessageFields[0].classList.add("error-visible");
        if(!focusElement) {
            focusElement = nameInput;
        }
    }

    //check for valid email
    if ( emailInput.value.trim() === "" || !emailRegex.test(emailInput.value)) {
        isErrorFree = false;
        errorMessageFields[1].classList.add("error-visible");
        if(!focusElement) {
            focusElement = emailInput;
        }
    }
        
    // check if tell us is empty
    if(tellUsInput.value.trim() === "") {
        isErrorFree = false;
        errorMessageFields[2].classList.add("error-visible");
        if(!focusElement) {
            focusElement = tellUsInput;
        }
    }

    if(!isErrorFree) {
        focusElement.focus();
    }
    else {
        const templateParams = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            text: tellUsInput.value.trim(),
        }

        emailjs.send('service_fl1wewp', 'template_uq8vzqk', templateParams).then(
            (response) => {
                successfullySentContactInfo()
            },
            (error) => {
                errorSendingContactInfo();
            },
          );
    }
})

function successfullySentContactInfo() {
    successMessage.innerHTML = "Thanks for joining our mailing list."
    successMessage.classList.add("success-text-visible")
    submitButton.blur();
    mailingListForm.reset();
    setTimeout(() => {
        successMessage.classList.remove("success-text-visible")
    }, 5000)
}

function errorSendingContactInfo() {
    successMessage.innerHTML = "Error sending contact info."
    successMessage.classList.add("error-text-visible")
    submitButton.blur();
    mailingListForm.reset();
    setTimeout(() => {
        successMessage.classList.remove("error-text-visible")
    }, 5000)
}

function clickOpenInfoBox(e){
    e.stopPropagation();
    if(!isInfoBoxOpen){
        infoBox.classList.add("show-info-box");
        document.addEventListener("click", clickOutsideModal);
        isInfoBoxOpen = true;
    }
    else {
        closeInfoBox();
    }
}

function keypressOpenInfoBox(e){
    if(e.key === "Enter" || e.key === " "){
        e.preventDefault(); 
        if(!isInfoBoxOpen) {
            isInfoBoxOpen = true;
            infoBox.classList.add("show-info-box");
            document.addEventListener("click", clickOutsideModal);
            infoIcon.addEventListener("blur", handleButtonBlur);
        }
        else {
            closeInfoBox();
        }
    }
}

// Function to handle clicks outside the modal
function clickOutsideModal(event) {
    if (!infoBox.contains(event.target)) {
        closeInfoBox();
    }
}

function handleButtonBlur(event) {
    if (event.relatedTarget !== infoIcon) {
      closeInfoBox();
    }
  }

// Function to close the modal
function closeInfoBox() {
    isInfoBoxOpen = false;
    // Remove the event listener for clicks outside the modal
    infoBox.classList.remove("show-info-box");
    document.removeEventListener("click", clickOutsideModal);
    infoIcon.removeEventListener("blur", handleButtonBlur);
}
