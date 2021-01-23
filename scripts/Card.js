import {keyDownClose, popupImage, popupImageName, popupOpenImage, overlayOpenImage, popupCloseOpenImage} from "./script.js"

export class Card {
    constructor (data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const element = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);

        return element;
    }
    createCard() {
        this._cardElement = this._getTemplate();

        this._cardElement.querySelector('.element__image').src = this._link;
        this._cardElement.querySelector('.element__image').alt = this._name;
        this._cardElement.querySelector('.element__image-name').textContent = this._name;
        this._setEventListenerLike();
        this._setEventListenerRemvoeCard();
        this._setEventListenersOpenCloseImage();

        return this._cardElement;
    }

    _setEventListenerLike() {
        this._cardElement.querySelector('.element__button-like').addEventListener('click', function (evt) {
            evt.target.classList.toggle('element__button-like_active')
       });
    }

    _setEventListenersOpenCloseImage() {
        this._cardElement.querySelector('.element__image').addEventListener('click', () => {
            this._openImage();
        });

        popupCloseOpenImage.addEventListener('click', () => {
            this._closeImage();
        });

        overlayOpenImage.addEventListener('click', () => {
            this._closeImage();
        });
    }

    _setEventListenerRemvoeCard() {
        this._cardElement.querySelector('.element__trash').addEventListener('click', () => {
            this._removeCard();
        });
    }

    _openImage() {
        popupImage.src = this._link;
        popupImage.alt = this._name;
        popupImageName.textContent = this._name;
        popupOpenImage.classList.add('popup_opened');
        document.addEventListener('keydown', keyDownClose);
    };

    _closeImage() {
        popupImage.src = '';
        popupImage.alt = '';
        popupImageName.textContent = '';
        popupOpenImage.classList.remove('popup_opened');
        document.removeEventListener('keydown', keyDownClose);
    }

    _removeCard() {
        this._cardElement.remove();
    }
}