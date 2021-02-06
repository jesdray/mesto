import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor() {
        super();
        this._popup = document.querySelector('.popup_script_open-image');   
        this._popupImage = document.querySelector('.popup__image');
        this._popupImageName = document.querySelector('.popup__image-name');
    }

    open(image) {
        this._popupImage.src = image.url;
        this._popupImage.alt = image.name;
        this._popupImageName.textContent = image.name

        super.open();
    }
}