import { initialCards, config, userData } from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo';
import './index.css';   


 

 
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
    const cardInfo = {
    name: cardData.inputInfoPlace,
    link: cardData.inputInfoLink
  }
    cardSection.addItem(cardInfo);
    addCardPopup.close();
  }
});
addCardPopup.setEventListeners();

openPopupAdd.addEventListener('click', () => {
  addCardPopup.open();
  validationAdd.resetValidation();
});

const validationEdit = new FormValidator(config, popupEdit);
validationEdit.enableValidation();

const validationAdd = new FormValidator(config, popupAdd);
validationAdd.enableValidation();


