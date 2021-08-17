export class Popup {
    constructor(popupSelector) {
        this.popupSelector = popupSelector;
    }
    _handleEscClose() {
        if (evt.key === 'Escape') {
            this.close();
        };
    }
    setEventListeners() {
        this.popup.addEventListener(('click'), (evt) => {
            if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
                this.close();
            }
        });
    }
    open() {
        this.popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }
    close() {
        this.popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }
}