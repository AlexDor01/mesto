const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup__edit');
const popupAdd = document.querySelector('.popup__add');
const openPopupBtn = document.querySelector('.profile__change');
const openPopupAdd = document.querySelector('.profile__button');
const popupContainer = document.querySelector('.popup__container');
const closePopupBtn = popupEdit.querySelector('.popup__close-button');
const closePopupAdd = popupAdd.querySelector('.popup__close-button');
const popupNameInput = popupContainer.querySelector('.form__input_type_name');
const popupDescrInput = popupContainer.querySelector('.form__input_type_descr');
const popupPlaceInput = popupContainer.querySelector('.form__input_type_place');
const popupLinkInput = popupContainer.querySelector('.form__input_type_link');
const profile = document.querySelector('.profile');
const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__title');
const profileDescr = profileInfo.querySelector('.profile__subtitle');
const formElement = document.querySelector('.form');

const cardsContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('.elements-item-template').content.querySelector('.elements__item');

openPopupBtn.addEventListener('click', function () {
  openPopup(popupEdit);
  popupNameInput.value = profileName.textContent;
  popupDescrInput.value = profileDescr.textContent;
});
openPopupAdd.addEventListener('click', function () {
  openPopup(popupAdd);
});
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

closePopupAdd.addEventListener('click', function () {
  closePopup(popupAdd);
});
closePopupBtn.addEventListener('click', function () {
  closePopup(popupEdit);
});


function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupNameInput.value;
  profileDescr.textContent = popupDescrInput.value;
  closePopup(popup);
}

formElement.addEventListener('submit', handleFormSubmit);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function handlerAddFormSubmit(evt) {
  const InputPlaceAdd = popupPlaceInput.value;
  const InputLinkAdd = popupLinkInput.value;

  const elementItem = elementItemTemplate.cloneNode(true);
  const elementItemName = elementItem.querySelector('.elements__title');
  elementItemName.textContent = InputPlaceAdd.name;
  const elementItemImg = elementItem.querySelector('.elements__img');
  elementItemImg.src = InputLinkAdd.link;
  closePopup(popupAdd);
  cardElementList.prepend(cardElement);
}
popupAdd.addEventListener('submit', handlerAddFormSubmit);

//const elementItemTemplate = document.querySelector('.elements-item-template').content.querySelector('.elements__item');
//const elementItemList = document.querySelector('.elements__list');

function initialCard(item) {
  const elementItem = cardTemplate.cloneNode(true);
  const elementItemName = elementItem.querySelector('.elements__title');
  elementItemName.textContent = item.name;
  const elementItemImg = elementItem.querySelector('.elements__img');
  elementItemImg.src = item.link;
  elementItemImg.alt = item.name;

  const LikeBtn = elementItem.querySelector('.elements__like');
  LikeBtn.addEventListener('click', () => {
    LikeBtn.classList.toggle('elements__like_active');
  });

  const delBtn = elementItem.querySelector('.elements__button');
  delBtn.addEventListener('click', () => {
    elementItem.remove();
  });

  cardsContainer.prepend(elementItem);
}
initialCards.forEach(item => {
initialCard(item);
});