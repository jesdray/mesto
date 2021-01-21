const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const elements = document.querySelector('.elements');

const popupImage = document.querySelector('.popup__image');
const popupImageName = document.querySelector('.popup__image-name');
const popupOpenImage = document.querySelector('.popup_script_open-image');
const overlayOpenImage = document.querySelector('.popup__overlay_script_open-image');
const popupCloseOpenImage = document.querySelector('.popup__close_script_open-image');

class Card {
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
        //document.addEventListener('keydown', keyDownClose);
    };

    _closeImage() {
        popupImage.src = '';
        popupImage.alt = '';
        popupImageName.textContent = '';
        popupOpenImage.classList.remove('popup_opened');
    }

    _removeCard() {
        this._cardElement.remove();
    }

    keyClosePopup(evt) {
        if (evt.key === "Escape") {console.log(1);}
    }
}

initialCards.forEach(itm => {
    const card = new Card(itm, '.template_script_card');
    const cardElement = card.createCard();

    document.querySelector('.elements').append(cardElement);
});

export {Card, popupImage, popupImageName, popupOpenImage, elements, overlayOpenImage};