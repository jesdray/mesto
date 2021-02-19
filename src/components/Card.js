export class Card {
    constructor({ data, handleCardClick }, cardSelector, userId, popupConfirmDelete, putLike, renderTrash, renderLike) {
        this._name = data.name;
        this._link = data.link;
        this.likes = data.likes;
        this.likeActive = false;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._putLike = putLike;
        this._renderTrash = renderTrash;
        this._renderLike = renderLike;

        this.cardId = data._id;
        this.popupConfirmDelete = popupConfirmDelete;

        this.ownerId = data.owner._id;
        this.userId = userId;
    }

    _getDataCard() {
        const data = {
            id: this.cardId,
            card: this.cardElement,
        };
        return data;
    }

    _getTemplate() {
        const element = document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(true);

        return element;
    }

    createCard() {
        this.cardElement = this._getTemplate();
        this.card = this._getDataCard();
        this._image = this.cardElement.querySelector(".element__image");
        this.like = this.cardElement.querySelector(".element__number-like");
        this._btnLike = this.cardElement.querySelector(".element__button-like");

        this._image.src = this._link;
        this._image.alt = this._name;
        this.like.textContent = this.likes.length;
        this.cardElement.querySelector(".element__image-name").textContent = this._name;
        this._setEventListeners();

        return this.cardElement;
    }

    switchLike() {
        this._btnLike.classList.toggle("element__button-like_active");
    }

    _setEventListeners() {
        this.cardElement.querySelector(".element__image").addEventListener("click", () => {
            this._handleCardClick({ name: this._name, url: this._link });
        });

        this._renderLike();

        this._renderTrash();

        this._btnLike.addEventListener("click", () => {
            this._putLike();
        });
    }
}
