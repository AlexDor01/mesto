import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)

        this.nameCard = this.popupElement.querySelector('.popup__img-name'),
            this.linkCard = this.popupElement.querySelector('.popup__img-ph')
    }
    open(data) {
        this.linkCard.src = data.link;
        this.nameCard.textContent = data.name;
        this.nameCard.alt = data.name;
        super.open();
    }
}
