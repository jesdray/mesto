import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
    constructor(popupSelector, sambitForm) {
        super();
        this._popup = popupSelector;
        this._form = popupSelector.querySelector('.popup__form');
        this._sambitForm = sambitForm;
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
        this._formValue.querySelector('.popup__button').addEventListener('sumbit', )
    }

    close() {
        super.close();
        this._form.reset();
    }
}