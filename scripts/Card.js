//Создание карточки
export class Card {
    constructor(data, templateSelector, handlePreviewImage) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handlePreviewImage = handlePreviewImage
    }

    //лайк
    _handleLikeIcon(evt) {
        evt.target.classList.toggle('elements__like_active');
    }

    //удалить
    _handleDeleteCard(evt) {
        evt.target.closest('.elements__item').remove();
    }

    generateCard() {
        this._cardElement = this._getCardTemplate();
        this._cardElementTitle = this._cardElement.querySelector('.elements__title');
        this._cardElementImg = this._cardElement.querySelector('.elements__img');
        this._cardElementDltButton = this._cardElement.querySelector('.elements__button');
        this._cardElementLike = this._cardElement.querySelector('.elements__like');

        this._cardElementTitle.textContent = this._name;
        this._cardElementImg.src = this._link;
        this._cardElementImg.alt = this._name;

        this._setEventListeners();
        return this._cardElement;
    }

    _setEventListeners() {
        this._cardElementDltButton.addEventListener('click', this._handleDeleteCard);
        this._cardElementLike.addEventListener('click', this._handleLikeIcon);
        this._cardElementImg.addEventListener('click', () => {
            this._handlePreviewImage(this._link, this._name)
        });

    }

    _getCardTemplate() {
        const elementItemTemplate = document.querySelector(this._templateSelector).content.querySelector('.elements__item');
        const cardItem = elementItemTemplate.cloneNode(true);
        this._cardElement = cardItem
        return cardItem;
    }
};