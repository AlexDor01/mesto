const popup = document.querySelector('.popup');
const openPopupBtn = document.getElementById('open_popup_btn');
const popupContainer = document.querySelector('.popup__container')
const closePopupBtn = document.querySelector('.popup__close-button');
const popupOverlay = document.querySelector('.popup__overlay');
let popupNameInput = popupContainer.querySelector('.form__name');
let popupDescrInput = popupContainer.querySelector('.form__descr');
let profile = document.querySelector('.profile');
let profileInfo = document.querySelector('.profile__info');
let profileName = profileInfo.querySelector('.profile__title');
let profileDescr = profileInfo.querySelector('.profile__subtitle');

function openPopup() {
    popupNameInput.value = profileName.textContent;
  popupDescrInput.value = profileDescr.textContent;
  popup.classList.add('popup_opened');
}
function closePopup() {
    popup.classList.remove('popup_opened')
}
openPopupBtn.addEventListener('click', function () {
openPopup();
})
closePopupBtn.addEventListener('click', function() {
closePopup();
})
popupOverlay.addEventListener('click', function() {
closePopup();
})
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupNameInput.value;
    profileDescr.textContent = popupDescrInput.value;
    closePopup();
  }
  closePopupBtn.addEventListener('click', closePopup);
  popupContainer.addEventListener('submit', formSubmitHandler);

