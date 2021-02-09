export default class Popup{
    constructor ( popupSelector ) {
        this._popup = popupSelector;
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.querySelector('.popup__close').addEventListener('click', this.close.bind(this));
        this._popup.querySelector('.popup__overlay').addEventListener('click', this.close.bind(this));
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose.bind(this));
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose.bind(this));
    }
}   