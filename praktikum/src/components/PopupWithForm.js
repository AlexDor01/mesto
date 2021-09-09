import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
    constructor( popupSelector, submitOn ) {
        super(popupSelector)
        this._submitOn = submitOn
        this.saveButton = document.querySelector('.form__btn');
        this._formElement = document.querySelector('.form');
    }

    _getInputvalues() {
        const result = {};
        const inputs = Array.from(this.formElement.querySelectorAll('.form__input'));
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
 
        this.formElement = this.popupElement.querySelector('.form') 
        this.formElement.addEventListener('submit', (evt) => { 
            evt.preventDefault(); 
            this._submitOn(this._getInputValues()); 
        }); 
    }  

}