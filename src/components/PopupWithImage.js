import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)

        this._popupPrvImg = this.popupElement.querySelector('.popup__img-ph'),
        this._popupPrwTitle = this.popupElement.querySelector('.popup__img-name')
    }
    open(data) {
        this._popupPrvImg.src = data.link;
        this._popupPrvImg.alt = data.name;
        this._popupPrwTitle.textContent = data.name;
        super.open();
    }
}
