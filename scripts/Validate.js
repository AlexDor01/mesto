const Validation = {
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
    buttonElement.setAttribute('disabled', true);
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

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    const isInvalidInput = inputList.some(inputElement => !inputElement.validity.valid);
    const inputEmpty = !inputList.some(inputElement => inputElement.value.length > 0);
    if (isInvalidInput || inputEmpty) {
        disabledSubmitBtn(buttonElement, inactiveButtonClass);
    }
    else {
        activeSubmitBtn(buttonElement, inactiveButtonClass);
    }; //И вот тут тоже, если честно, не очень понятно, объясните подробнее, пожалуйста
};

const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) => {
    const formList = Array.from(document.querySelectorAll(formSelector));

    formList.forEach(formElement => {
        setEventListener(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass);
    });
};

enableValidation(Validation);