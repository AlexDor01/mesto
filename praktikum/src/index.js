import { initialCards } from '../scripts/initial-cards';
import { ValidationConfig } from '../scripts/Validate.js';
import { Card } from '../scripts/Card.js';
import { Popup } from '../scripts/Popup';
import { PopupWithForm } from '../scripts/PopupWithForm.js';
import { PopupWithImage } from '../scripts/PopupWithImage.js';
import { Section } from '../scripts/Section.js';
import { UserInfo } from '../scripts/UserInfo';
import '../pages/index.css';

 
const objectForm = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__btn',
  inactiveButtonClass: 'form__btn_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}
 
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImg = document.querySelector('.popup_type_img');
const popupAddForm = document.querySelector('.popup-add-form');
const openPopupBtn = document.querySelector('.profile__change');
const openPopupAdd = document.querySelector('.profile__button');
const closePopupEdit = popupEdit.querySelector('.popup__close-button');
const closePopupAdd = popupAdd.querySelector('.popup__close-button');
const closePopupImg = popupImg.querySelector('.popup__close-button');
const popupNameInput = popupEdit.querySelector('.form__input_type_name');
const popupDescrInput = popupEdit.querySelector('.form__input_type_descr');
const popupPlaceInput = popupAdd.querySelector('.form__input_type_place');
const popupLinkInput = popupAdd.querySelector('.form__input_type_link');
const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__title');
const profileDescr = profileInfo.querySelector('.profile__subtitle');
const popupImgPhoto = popupImg.querySelector('.popup__img-ph'); 
const popupImgTitle = popupImg.querySelector('.popup__img-name') 
 
const cardsContainer = document.querySelector('.elements');
 
const popups = Array.from(document.querySelectorAll('.popup'));
 

 

 
function handleProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupNameInput.value;
  profileDescr.textContent = popupDescrInput.value;
  closePopup(popupEdit);
}
 
 

 
 
 
initialCards.forEach((item) => {
  addCardList(item);
}); 
 
function addCardList(data) {
  const elementItem = createElement(data);
  cardsContainer.prepend(elementItem);
} 
 
function createElement(data) {
  const templateSelector = '.elements-item-template';
  const newCard = new Card(data, templateSelector, handlePreviewImage);
  const newCardCreated = newCard.generateCard();
  return newCardCreated; 
} 
 
function handleSubmitAdd(evt) { 
  evt.preventDefault(); 
  addCardList({ name: popupPlaceInput.value, link: popupLinkInput.value }, handlePreviewImage, '.elements-item-template'); 
  popupAddForm.reset(); 
  closePopup(popupAdd);  
} 
 
closeOverlayPopups(popups); 
 
openPopupBtn.addEventListener('click', openPopupTypeEdit); 
openPopupAdd.addEventListener('click', openPopupTypeAdd); 
 
closePopupEdit.addEventListener('click', () => closePopup(popupEdit)); 
closePopupAdd.addEventListener('click', () => closePopup(popupAdd)); 
closePopupImg.addEventListener('click', () => closePopup(popupImg)); 
 
popupEdit.addEventListener('submit', handleProfileSubmit); 
popupAdd.addEventListener('submit', handleSubmitAdd); 
 
function validateForm(elementForm) { 
  const validator = new ValidationConfig(objectForm, elementForm); 
  validator.enableValidation(); 
  return validator; 
} 
 
const popupEditValidator = validateForm(popupEdit); 
const popupAddValidator = validateForm(popupAdd); 
 