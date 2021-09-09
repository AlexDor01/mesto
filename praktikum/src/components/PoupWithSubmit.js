import { Popup } from './Popup.js'

export class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._formElement = document.querySelector('.form');
    }

    setSubmitAction(submitHandler) {
        this._submitHandler = submitHandler;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._handleFormSubmit;
        })
    }
}