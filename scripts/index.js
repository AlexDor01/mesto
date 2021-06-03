import { initialCards } from './initial-cards';
import { ValidationConfig } from './Validate.js';
import { Card } from './Card.js';

const objectForm = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__btn',
  inactiveButtonClass: 'form__btn_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImg = document.querySelector('.popup_type_img');
const popupAddForm = document.querySelector('.popup-add-form');
const popupEditForm = document.querySelector('.popup-edit-form');
const openPopupBtn = document.querySelector('.profile__change');
const openPopupAdd = document.querySelector('.profile__button');
const popupContainer = document.querySelector('.popup__container');
const closePopupEdit = popupEdit.querySelector('.popup__close-button');
const closePopupAdd = popupAdd.querySelector('.popup__close-button');
const closePopupImg = popupImg.querySelector('.popup__close-button');
const popupNameInput = popupContainer.querySelector('.form__input_type_name');
const popupDescrInput = popupContainer.querySelector('.form__input_type_descr');
const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__title');
const profileDescr = profileInfo.querySelector('.profile__subtitle');
const popupImgPhoto = popupImg.querySelector('.popup__img-ph');
const popupImgTitle = popupImg.querySelector('.popup__img-name')

const cardsContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('.elements-item-template').content.querySelector('.elements__item');

const popups = Array.from(document.querySelectorAll('.popup'));
const elementItemList = document.querySelector('.elements__item')

function closeOverlayPopups(popups) {
  popups.forEach(popup => {
    popup.addEventListener('click', function (evt) {
      if (evt.target.classList.contains('popup_opened')) {
        closePopup(popup)
      }
    })
  });
}

//закрытие попапа по нажатию Esc
function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

function handleProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupNameInput.value;
  profileDescr.textContent = popupDescrInput.value;
  closePopup(popupEdit);
}


function openPopup(popup) {
  popup.classList.add('popup__opened');
  document.addEventListener('keydown', closePopupEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup__opened');
  document.removeEventListener('keydown', closePopupEsc);
}

function openPopupTypeEdit() {
  popupNameInput.value = profileName.textContent;
  popupDescrInput.value = profileDescr.textContent;
  popupEditValidator.resetValidation();
  openPopup(popupEdit);
}

function openPopupTypeAdd() {
  popupAddForm.reset()
  popupAddValidator.resetValidation();
  openPopup(popupAdd);
}

function handlePreviewImage(link, name) {
  popupImgPhoto.src = link;
  popupImgPhoto.alt = name;
  popupImgTitle.textContent = name;
  openPopup(popupImg);
}

initialCards.forEach((item) => {
  addCardList(item);
})

function addCardList(data) {
  const elementItem = createElement(data);
  elementItemList.prepend(elementItem);
}

function createElement(data) {
  const templateSelector = '.elements-item-template';
  const newCard = new Card(data, templateSelector, handlerImgPrv);
  const newCardCreated = newCard.generateCard();
  return newCardCreated;
}

function handleSubmitAdd(evt) {
  evt.preventDefault();
  addCardList({ name: document.querySelector('.form__input_type_place').value, link: document.querySelector('.form__input_type_link').value }, handlePreviewImage, '.elements-item-template');
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

const popupEditValidator = validateForm(popupEditForm);
const popupAddValidator = validateForm(popupAddForm);

