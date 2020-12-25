const enableValidationConfig = ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input_invalid'
  }); 

function showError(form, input, config) {
    const errorElement = form.querySelector(`#${input.id}-error`)
    errorElement.textContent = input.validationMessage;
    input.classList.add(config.errorClass);
}

function hideError(form, input, config) {
    const errorElement = form.querySelector(`#${input.id}-error`)
    errorElement.textContent = "";
    input.classList.remove(config.errorClass);
}

function isValid(form, input, config) {
    if (input.validity.valid) {
        hideError(form, input, config);
    } else {
        showError(form, input, config);
    }
}

function setButtonState(button, valid, config) {
    if (valid) {
        button.classList.remove(config.inactiveButtonClass);
        button.disabled = false;
    } else {
        button.classList.add(config.inactiveButtonClass);
        button.disabled = true;
    }
}

function setEventListener(form, config) {
    const inputList = form.querySelectorAll(config.inputSelector)
    const button = form.querySelector(config.submitButtonSelector)

    inputList.forEach(input => {
        input.addEventListener('input', () => {
            isValid(form, input, config);
            setButtonState(button, form.checkValidity(), config)
        });
    });
};

function enableValidation(config) {
    const forms = document.querySelectorAll(config.formSelector);
    forms.forEach(form => {
        setEventListener(form, config);

        const button = form.querySelector(config.submitButtonSelector)
        setButtonState(button, form.checkValidity(), config)
    });
};

function clearingErrorFillerForm(form, input, config) {
    input.forEach(itm => {
        hideError(form, itm, config);
    });
}

enableValidation(enableValidationConfig);