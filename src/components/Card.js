export class Card {
    constructor({ data, handleCardClick }, cardSelector, user, popupConfirmDelete, putLike, renderTrash, renderLike) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._likeActive = false;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._putLike = putLike;
        this._renderTrash = renderTrash;
        this._renderLike = renderLike;

        this._cardId = data._id;
        this._popupConfirmDelete = popupConfirmDelete;

        this._ownerId = data.owner._id;
        this._user = user;
    }

    _getDataCard() {
        const data = {
            id: this._cardId,
            card: this._cardElement,
        };
        return data;
    }

    _getTemplate() {
        const element = document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(true);

        return element;
    }

    createCard() {
        this._cardElement = this._getTemplate();
        this._card = this._getDataCard();

        this._image = this._cardElement.querySelector(".element__image");
        this._like = this._cardElement.querySelector(".element__number-like");
        this._btnLike = this._cardElement.querySelector(".element__button-like");

        this._image.src = this._link;
        this._image.alt = this._name;
        this._like.textContent = this._likes.length;
        this._cardElement.querySelector(".element__image-name").textContent = this._name;
        this._setEventListeners();

        return this._cardElement;
    }

    _switchLike() {
        this._btnLike.classList.toggle("element__button-like_active");
    }

    _removeCard() {
        this.api
            .removeCard(this._cardId)
            .then(() => {
                this._cardElement.remove();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    _setEventListeners() {
        this._cardElement.querySelector(".element__image").addEventListener("click", () => {
            this._handleCardClick({ name: this._name, url: this._link });
        });

        this._renderLike();

        this._renderTrash();

        this._btnLike.addEventListener("click", () => {
            this._putLike();
        });
    }
}
