export class FormValidator {
    constructor(config, formElement) {
      this._config = config;
      this._formElement = formElement;
      this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
      this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    }
  
    _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    }
  
    _showInputError(inputElement, errorMessage) {
      const errorElement = this._formElement.querySelector(
        `#${inputElement.id}-error`
      );
      inputElement.classList.add(this._config.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._config.errorClass);
    }
  
    _hideInputError(inputElement) {  
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);  
        inputElement.classList.remove(this._config.inputErrorClass);  
        errorElement.classList.add(this._config.errorClass);  
        errorElement.textContent = '';  
    }  
  
    _hasInvalidInput() {
      return this._inputList.some((inputElement) => !inputElement.validity.valid);
    }
  
    toggleButtonState() {
      if (this._hasInvalidInput(this._inputList)) {
        this._buttonElement.setAttribute('disabled', true);
  
      } else {
        this._buttonElement.removeAttribute('disabled');
      }
    }
    _setEventListeners() {
  
      this.toggleButtonState();
  
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input',  () => {
          this._checkInputValidity(inputElement);
          this.toggleButtonState();
        });
      });
    }
  
    removeValidationErrors(){
        this._inputList.forEach((itemElement) => {
            if(itemElement) {
              this._hideInputError(itemElement)
            }
          });
    }
  
    enableValidation() {
      this._formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
  
      this._setEventListeners();
    }
  }