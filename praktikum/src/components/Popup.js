export class Popup {
    constructor(popupSelector) {
        this.popupSelector = popupSelector;  
        this._handleEscClose = this._handleEscClose.bind(this);
        this.popupElement = document.querySelector(popupSelector);
    }
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        };
    }
    setEventListeners() {
        this.popupElement.addEventListener(('click'), (evt) => { 
            if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) { 
                this.close(); 
            } 
        });
    }
    open() {
        this.popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }
    close() {
        this.popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
}