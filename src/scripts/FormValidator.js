export class FormValidator {
    constructor(form, config) {
        this._form = form;

        this._inputList = this._form.querySelectorAll(config.inputSelector);
        this._button = this._form.querySelector('.popup__button');

        this._inputSelector = config.inputSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputError = config.inputErrorClass;
        this._errorClass = config.errorClass;
    }

    _setEventListener() {
        this._inputList.forEach(input => {
            input.addEventListener('input', () => {
                this._isValid(input);
                this.setButtonState(this._button)
            });
        });
    };

    _isValid(input) {
        if (input.validity.valid) {
            this._hideError(input);
        } else {
            this._showError(input);
        }
    };

    _hideError(input) {
        const errorElement = this._form.querySelector(`#${input.id}-error`)
        errorElement.textContent = "";
        input.classList.remove(this._errorClass);
    };

    _showError(input) {
        const errorElement = this._form.querySelector(`#${input.id}-error`)
        errorElement.textContent = input.validationMessage;
        input.classList.add(this._errorClass);
    };

    setButtonState() {
        if (this._form.checkValidity()) {
            this._button.classList.remove(this._inactiveButtonClass);
            this._button.disabled = false;
        } else {
            this._button.classList.add(this._inactiveButtonClass);
            this._button.disabled = true;
        }
    };

    clearErrorField() {
        this._inputList.forEach(input => {
            this._hideError(input)
        })
    };

    enableValidation() {
        this._setEventListener()
    };
}