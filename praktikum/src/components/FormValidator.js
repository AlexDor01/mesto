export class FormValidator { 
    constructor(config, elementForm) { 
        this._config = config; 
        this._elementForm = elementForm; 
        this._inputSelector = config.inputSelector; 
        this._submitButtonSelector = config.submitButtonSelector; 
        this._inputErrorClass = config.inputErrorClass; 
        this._errorClass = config.errorClass; 
        this._inactiveButtonClass = config.inactiveButtonClass; 
        this._inputList = Array.from(this._elementForm.querySelectorAll(this._inputSelector)); 
        this._buttonElement = this._elementForm.querySelector(this._submitButtonSelector); 
    }; 
 
    _showInputError(inputElement) { 
        const errorElement = this._elementForm.querySelector(`#${inputElement.id}-error`); 
        inputElement.classList.add(this._inputErrorClass); 
        errorElement.classList.add(this._errorClass); 
        errorElement.textContent = inputElement.validationMessage; 
    } 
 
    _hideInputError(inputElement) { 
        const errorElement = this._elementForm.querySelector(`#${inputElement.id}-error`); 
        inputElement.classList.remove(this._inputErrorClass); 
        errorElement.classList.add(this._errorClass); 
        errorElement.textContent = ''; 
    } 
 
    _hasInvalidInput() { 
        return this._inputList.some(inputElement => { 
            return !inputElement.validity.valid; 
        }) 
    } 
 
    _desactivateButton() { 
        this._buttonElement.disabled = true; 
        this._buttonElement.classList.add(this._config.inactiveButtonClass); 
    } 
 
    _toggleButtonstate() { 
        if (this._hasInvalidInput()) { 
            this._desactivateButton(); 
        } 
        else { 
            this._buttonElement.removeAttribute('disabled'); 
            this._buttonElement.classList.remove(this._inactiveButtonClass); 
        } 
    } 
 
    _checkInputValidity(inputElement) { 
        const isInputNotValid = !inputElement.validity.valid; 
 
        if (isInputNotValid) { 
            this._showInputError(inputElement); 
        } 
        else { 
            this._hideInputError(inputElement, inputElement.validationMessage); 
        } 
    }; 
 
    resetValidation() { 
        this._inputList.forEach(inputElement => { 
            this._hideInputError(inputElement); 
        }); 
        this._toggleButtonstate(); 
    } 
 
    _setEventListeners() { 
        this._inputList.forEach(inputElement => { 
            const handleInput = () => { 
                this._checkInputValidity(inputElement); 
                this._toggleButtonstate(); 
            }; 
            inputElement.addEventListener('input', handleInput) 
        }); 
        this._toggleButtonstate(); 
    } 
 
    enableValidation() { 
        this._elementForm.addEventListener('submit', evt => evt.preventDefault()); 
        this._setEventListeners(); 
    } 
} 