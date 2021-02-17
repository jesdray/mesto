import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
    constructor({submitForm}, popupSelector, loading) {
        super();
        this._popup = popupSelector;
        this._form = popupSelector.querySelector('.popup__container');
        this._sumbitForm = submitForm;

        this._button = popupSelector.querySelector('.popup__button')
        this._btnText = popupSelector.querySelector('.popup__button').textContent;
        this._loading = loading;
    }

    _getInputValues() {
        this._inputList = this._form.querySelectorAll('.popup__input');

        this._formValue = {};

        this._inputList.forEach(input => {
            this._formValue[input.name] = input.value;
        })

        return this._formValue;
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._button.textContent = this._loading
        } else {
            this._button.textContent =  this._btnText
        }

    }

    confirmDelet(data) {
        this._dataCard = data
    }

    setСonfirm() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.renderLoading(true);
            this._sumbitForm(this._dataCard);
        })
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.renderLoading(true);
            const value = this._getInputValues()
            this._sumbitForm(value);
        })
    }

    close() {
        super.close();
        this._form.reset();
    }
}