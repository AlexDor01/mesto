import { Popup } from './Popup'

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)

        this.nameCard = this.popup.querySelector('.popup__img-name'),
            this.linkCard = this.popup.querySelector('.popup__img-ph')
    }
    open(data) {
        this.linkCard.src = data.link;
        this.nameCard.textContent = data.name;
        this.nameCard.alt = data.name;
        super.open();
    }
}
