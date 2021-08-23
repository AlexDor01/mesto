import { initialCards } from './scripts/initial-cards';
import { ValidationConfig } from './scripts/Validate.js';
import { Card } from './scripts/Card.js';
import { PopupWithForm } from './scripts/PopupWithForm.js';
import { PopupWithImage } from './scripts/PopupWithImage.js';
import { Section } from './scripts/Section.js';
import { UserInfo } from './scripts/UserInfo';
import './pages/index.css';   


 
const config = {
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

const userData = {
  name: '.profile__title',
  job: '.profile__subtitle'
};
 

 

 
const cardSection = new Section({
  items: initialCards,
  renderer: (cardData) => {
    const card = new Card(cardData, '.elements-item-template', (data) => {
      popupWithImage.open(data);
    })
    return card.render()
  }
},'.elements__list')
cardSection.renderAll();

const userInfo = new UserInfo(userData);

const popupEditForm = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  submitOn: (data) => {
    userInfo.setUserInfo(data)
    popupEditForm.close();
  }
});

popupEditForm.setEventListeners();

openPopupBtn.addEventListener('click', () => {
  const userData = userInfo.getUserInfo()
  popupNameInput.value = userData.name;
  popupDescrInput.value = userData.job;
  popupEditForm.open();
  validationEdit.resetValidation();
});

const popupWithImage = new PopupWithImage('.popup_type_img');
popupWithImage.setEventListeners();

const addCardPopup = new PopupWithForm({
  popupSelector: '.popup_type_add',
  submitOn: (cardData) => {
    cardSection.addItem(cardData);
    addCardPopup.close();
  }
});
addCardPopup.setEventListeners();

openPopupAdd.addEventListener('click', () => {
  addCardPopup.open();
  validationAdd.resetValidation();
});

const validationEdit = new ValidationConfig(config, popupEdit);
validationEdit.enableValidation();

const validationAdd = new ValidationConfig(config, popupAdd);
validationAdd.enableValidation();


