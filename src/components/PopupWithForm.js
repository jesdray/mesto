import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
    constructor({submitForm}, popupSelector) {
        super();
        this._popup = popupSelector;
        this._form = popupSelector.querySelector('.popup__container');
        this._sumbitForm = submitForm;
    }

    _getInputValues() {
        this._inputList = this._form.querySelectorAll('.popup__input');

        this._formValue = {};

        this._inputList.forEach(input => {
            this._formValue[input.name] = input.value;
        })

        return this._formValue;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const value = this._getInputValues()
            this._sumbitForm(value);
        })
    }

    close() {
        super.close();
        this._form.reset();
    }
}