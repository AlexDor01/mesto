const popup = document.querySelector('.popup');
const openPopupBtn = document.getElementById('open_popup_btn');
const closePopupBtn = document.querySelector('.popup__close-button');
const popupOverlay = document.querySelector('.popup__overlay')


function openPopup() {
    popup.classList.add('popup_opened')
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