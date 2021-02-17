export class Card {
    constructor ({data, handleCardClick}, cardSelector, user, popupConfirmDelete, api) {
        this._api = api
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._likeActive = false;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;

        this._cardId = data._id;
        this._popupConfirmDelete = popupConfirmDelete;

        this._ownerId = data.owner._id;
        this._user = user;

    }

    _getDataCard() {
        const data = {
                    id: this._cardId,
                    card: this._cardElement
                    }
        return data
    }

    _getTemplate() {
        const element = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);

        return element;
    }

    createCard() {
        this._cardElement = this._getTemplate();
        this._card = this._getDataCard()

        this._image = this._cardElement.querySelector('.element__image')
        this._like = this._cardElement.querySelector('.element__number-like')
        this._btnLike = this._cardElement.querySelector('.element__button-like');

        this._image.src = this._link;
        this._image.alt = this._name;
        this._like.textContent = this._likes.length;
        this._cardElement.querySelector('.element__image-name').textContent = this._name;
        this._setEventListeners();

        return this._cardElement;
    }

    like() {
        if (this._likeActive === true) {
            this._api.removeLike(this._card)
                .then((res) => {
                    this._like.textContent = res.likes.length;
                    this._likeActive = false;
                    this._switchLike();
                })
        } else {if (this._likeActive === false) {
            this._api.setLike(this._card)
            .then((res) => {
                this._like.textContent = res.likes.length;
                this._likeActive = true;
                this._switchLike();
            })
        }} 
    }

    _switchLike() {
        this._btnLike.classList.toggle('element__button-like_active')
    };

    _removeCard() {
        this.api
            .removeCard(this._cardId)
            .then(() => {
                this._cardElement.remove();
            })
            .catch(err => {
                console.log(err);
            })
    }

    _setEventListeners() {
        this._cardElement.querySelector('.element__image').addEventListener('click', () => {
            this._handleCardClick({ name: this._name,
                                    url: this._link
                                 });
        });
       
       this._likes.forEach(item => {
        this._user
            .then((user) => {
                if (user._id === item._id) {
                    this._likeActive = true;
                    this._switchLike();
                }
            })
            .catch(err => {
                console.log(err);
            })
        })

       this._user
            .then(user => {
                return user._id === this._ownerId;
            })
            .then(isTrue => {
                if (isTrue) {
                    this._cardElement.querySelector('.element__trash').classList.add('element__trash_active')
                    this._cardElement.querySelector('.element__trash').addEventListener('click', () => {
                        this._popupConfirmDelete.confirmDelet(this._card)
                        this._popupConfirmDelete.open()
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })

            this._btnLike.addEventListener('click', () => {
            this.like();
        });
    }
}