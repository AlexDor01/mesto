import { Popup } from './Popup'

export class PopupWithForm extends Popup {
    constructor({ popupSelector, submitOn }) {
        super(popupSelector)
        this._submitOn = submitOn
    }
    _getInputValues() {
        this._inputList = Array.from(this.formElement.querySelectorAll('.form__input'));
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        })
        return this._formValues
    }
    setEventListeners() {
        super.setEventListeners();

        this.formElement = this.popup.querySelector('.form')
        this.formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitOn(this._getInputValues());
        });
    }
    close() {
        super.close();
        this.formElement.reset();
    }
}