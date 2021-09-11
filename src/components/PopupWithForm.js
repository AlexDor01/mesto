import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
    constructor( popupSelector, submitOn ) {
        super(popupSelector)
        this._submitOn = submitOn;
        this.saveButton = document.querySelector('.form__btn');
        this._formElement = document.querySelector('.form');
    }

    _getInputvalues() {
        const result = {};
        const inputs = Array.from(this._formElement.querySelectorAll('.form__input'));
        inputs.forEach(input => {
            result[input.name] = input.value;
        })
        return result;
    }

    close() {
        this._formElement.reset();
        super.close();
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this.saveButton.textContent = 'Сохранение...'
        }
        else {
            this.saveButton.textContent = 'Сохранить'
        }
    }

    setEventListeners() {            
        super.setEventListeners();    
 
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault()
            const cardData = this._getInputvalues();
            this._submitOn(cardData);
        })
    }  

}