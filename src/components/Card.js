export class Card {
    constructor({ data }, templateSelector, handleCardClick, handleRemoveClick, handleLikeClick, api) {
        this._data = data;
        this._title = data.name;
        this._link = data.link;
        this._likes = this._data.likes;
        this._id = data._id;
        this._currentUserId = data.myUserId;
        this._templateSelector = templateSelector;
        this.handleCardClick = handleCardClick;
        this.handleRemoveClick = handleRemoveClick;
        this.handleLikeClick = handleLikeClick;
        this._api = api;
    }

    _makeElements() {
        const cardTemplate = document.querySelector(this._templateSelector);
        this.cardElement = cardTemplate.content.querySelector('.elements__item').cloneNode(true);
        return this.cardElement;
    }

    _setEventListener() {
        this._buttonRemove = this.cardElement.querySelector('.elements__button');
        this.buttonLike = this.cardElement.querySelector('.elements__like');
        this._cardImg = this.cardElement.querySelector('.elements__img');
        this._buttonRemove.addEventListener('click', () => this.handleRemoveClick(this._id, this))
        this.buttonLike.addEventListener('click', () => this.handleLikeClick())
        this._cardImg.addEventListener('click', () => this.handleCardClick())
    }

    _checkMyLike() {
        this._likes.some((item) => {
            if (item._id === this._currentUserId) {
                this.buttonLike.classList.add('elements__like_active');
            }
        })
    }



    render() {
        this.cardElement = this._makeElements();
        this._setEventListener();

        this._checkMyLike();
        this.cardElement.querySelector('.elements__title').textContent = this._title;
        this._cardImg.src = this._link;
        this._cardImg.alt = this._title;

        this.cardElement.querySelector('.element__likes').textContent = this._likes.length;

        if (!(this._data.owner._id === this._currentUserId)) {
            this._buttonRemove.remove();
        }

        return this.cardElement;
    }
}