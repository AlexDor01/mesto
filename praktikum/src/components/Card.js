export class Card {
    constructor(cardData, templateSelector, handleOpenPhoto) {
        this._name = cardData.name;
        this._link = cardData.link;
        this._templateSelector = templateSelector;
        this._handleOPenPhoto = handleOpenPhoto;

        this._makeElements();
        this._setEventListenersCard();
    }

    _makeElements() {
        const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.elements__item');
        this._card = cardTemplate.cloneNode(true);

        this._buttonLike = this._card.querySelector('.elements__like');
        
        this._buttonRemove = this._card.querySelector('.elements__button');
        this._cardImg = this._card.querySelector('.elements__img');
        this._cardDescription = this._card.querySelector('.elements__title');


        this._cardDescription.textContent = this._name;
        this._cardImg.src = this._link;
        this._cardImg.alt = this._name;
    };
    
    _setEventListenersCard() {
        this._buttonRemove.addEventListener('click', () => {
            this._handleDeleteCard()
        });
        this._buttonLike.addEventListener('click', () => {
            this._handleLikeClick()
        });
        this._cardImg.addEventListener('click', () => {
            this._showImageCard()
        });
    };

    _handleDeleteCard() {
        this._card.remove();
        this._card = null;
    };

    _handleLikeClick() {
        this._buttonLike.classList.toggle('elements__like_active');
    };

    _showImageCard() {
        this._handleOPenPhoto({
            name: this._name,
            link: this._link
        })
    }

    render() {
        return this._card;
    };
}