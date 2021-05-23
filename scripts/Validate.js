const validationConfig = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__btn',
    inactiveButtonClass: 'form__btn_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
};

const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
    inputElement.classList.add(inputErrorClass);
};

const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = "";
    errorElement.classList.remove(errorClass);
    inputElement.classList.remove(inputErrorClass);
};

const checkInvalid = (formElement, inputElement, inputErrorClass, errorClass) => {
    if (!inputElement.validity.valid) {
        const errorMessage = inputElement.validationMessage;
        showInputError(formElement, inputElement, errorMessage, inputErrorClass, errorClass);
    }
    else { hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
};

const disabledSubmitBtn = (buttonElement, inactiveButtonClass) => {
    console.log(buttonElement)
    buttonElement.disabled = true;
    buttonElement.classList.add(inactiveButtonClass);
};

const activeSubmitBtn = (buttonElement, inactiveButtonClass) => {
    buttonElement.removeAttribute('disabled', true);
    
    buttonElement.classList.remove(inactiveButtonClass);
};

const setEventListener = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
    const buttonElement = formElement.querySelector(submitButtonSelector);
    formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
        disabledSubmitBtn(buttonElement, inactiveButtonClass);
    });
    disabledSubmitBtn(buttonElement, inactiveButtonClass);
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInvalid(formElement, inputElement, inputErrorClass, errorClass);
            toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        });
    });
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        console.log(inputElement.validity)
      return !inputElement.validity.valid;
    });
   
  }; 
const toggleButtonState = (buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput || inputEmpty) {
        disabledSubmitBtn(buttonElement, inactiveButtonClass);
    }
    else {
        activeSubmitBtn(buttonElement, inactiveButtonClass);
    };
};

const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) => {
    const formList = Array.from(document.querySelectorAll(formSelector));

    formList.forEach(formElement => {
        setEventListener(formElement, inputSelector, inactiveButtonClass, submitButtonSelector, inputErrorClass, errorClass);
    console.log(setEventListener)
    });
};

enableValidation(validationConfig);