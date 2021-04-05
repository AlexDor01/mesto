  
const popup = document.querySelector('.popup');
const openPopupBtn = document.querySelector('.profile__change');
const popupContainer = document.querySelector('.popup__container');
const closePopupBtn = document.querySelector('.popup__close-button');
const popupNameInput = popupContainer.querySelector('.form__input_name');
const popupDescrInput = popupContainer.querySelector('.form__input_descr');
const profile = document.querySelector('.profile');
const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__title');
const profileDescr = profileInfo.querySelector('.profile__subtitle');

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
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupNameInput.value;
    profileDescr.textContent = popupDescrInput.value;
    closePopup();
  }
  closePopupBtn.addEventListener('click', closePopup);
  popupContainer.addEventListener('submit', handleFormSubmit);
