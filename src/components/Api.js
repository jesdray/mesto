export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}cards`, {
            method: "GET",
            headers: this._headers,
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    getUserData() {
        return fetch(`${this._baseUrl}users/me`, {
            method: "GET",
            headers: this._headers,
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    editDataUser(data) {
        return fetch(`${this._baseUrl}users/me`, {
            method: "PATCH",
            headers: this._headers,

            body: JSON.stringify({
                name: data.name,
                about: data.about,
            }),
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    postNewCard(data) {
        return fetch(`${this._baseUrl}cards`, {
            method: "POST",
            headers: this._headers,

            body: JSON.stringify({
                name: data.name,
                link: data.link,
            }),
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    removeCard(cardId) {
        return fetch(`${this._baseUrl}cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers,
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    editAvatarUser(url) {
        return fetch(`${this._baseUrl}users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,

            body: JSON.stringify({
                avatar: url.about,
            }),
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    setLike(card) {
        return fetch(`${this._baseUrl}cards/likes/${card.id}`, {
            method: "PUT",
            headers: this._headers,
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    removeLike(card) {
        return fetch(`${this._baseUrl}cards/likes/${card.id}`, {
            method: "DELETE",
            headers: this._headers,
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }
}
