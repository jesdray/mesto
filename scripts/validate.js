const enableValidationConfig = ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }); 

function showError(form, input) {
    const errorElement = form.querySelector(`#${input.id}-error`)
    errorElement.textContent = input.validationMessage;
    input.classList.add('popup__input_invalid');
}

function hideError(form, input) {
    const errorElement = form.querySelector(`#${input.id}-error`)
    errorElement.textContent = "";
    input.classList.remove('popup__input_invalid');
}

function isValid(form, input) {
    if (input.validity.valid) {
        hideError(form, input);
    } else {
        showError(form, input);
    }
}

function setButtonState(button, valid) {
    if (valid) {
        button.classList.remove('popup__button_disabled');
        button.disabled = false;
    } else {
        button.classList.add('popup__button_disabled');
        button.disabled = true;
    }
}

function setEventListener(form) {
    const inputList = form.querySelectorAll('.popup__input')
    const button = form.querySelector('.popup__button')

    inputList.forEach(input => {
        input.addEventListener('input', () => {
            isValid(form, input);
            setButtonState(button, form.checkValidity())
        });
    });
};

function enableValidation() {
    const forms = document.querySelectorAll('.popup__container');
    forms.forEach(form => {
        setEventListener(form);

        const button = form.querySelector('.popup__button')
        setButtonState(button, form.checkValidity())
    });
};

function clearingErrorFillerForm(form, input) {
    input.forEach(itm => {
        isValid(form, itm);
    });
}

enableValidation();