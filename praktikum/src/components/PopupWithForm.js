import { Popup } from './Popup.js'

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
    }     //Я не совсем понимаю, как мне исправить баг с карточками. 
    setEventListeners() {           //В Слэке уже спрашивал, Вы не могли бы подсказать место примерное, 
        super.setEventListeners();   //у меня будто ключи теряются, но при попытке заменить их все слетает

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