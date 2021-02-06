export class Card {
    constructor ({data, handleCardClick}, cardSelector, ) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
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
        this._setEventListeners();

        return this._cardElement;
    }

    _switchLike(evt) {
        evt.target.classList.toggle('element__button-like_active')
    };

    _setEventListeners() {
        this._cardElement.querySelector('.element__image').addEventListener('click', () => {
            this._handleCardClick({ name: this._name,
                                     url: this._link
                                 });
        });

        this._cardElement.querySelector('.element__button-like').addEventListener('click', (evt) => {
            this._switchLike(evt);
       });

       this._cardElement.querySelector('.element__trash').addEventListener('click', () => {
        this._removeCard();
    });
    }

    _removeCard() {
        this._cardElement.remove();
    }
}