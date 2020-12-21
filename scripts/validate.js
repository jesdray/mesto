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

function setButtonState(button, valid, config) {
    if (valid) {
        button.classList.remove('popup__button_disabled');
        button.disabled = false;
    } else {
        button.classList.add('popup__button_disabled');
        button.disabled = true;
    }
}

function setEventListener(form, config) {
    const inputList = form.querySelectorAll('.popup__input')
    const button = form.querySelector('.popup__button')

    inputList.forEach(input => {
        input.addEventListener('input', () => {
            isValid(form, input, config);
            setButtonState(button, form.checkValidity(), config)
        });
    });
};

function enableValidation(config) {
    const forms = document.querySelectorAll('.popup__container');
    forms.forEach(form => {
        setEventListener(form, config);

        const button = form.querySelector('.popup__button')
        setButtonState(button, form.checkValidity(), config)
    });
};

enableValidation(enableValidationConfig);