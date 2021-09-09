import { initialCards, config, userData } from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo';
import './index.css';
import { Api } from '../components/Api.js';
import { PopupWithSubmit } from '../components/PoupWithSubmit.js';





const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImg = document.querySelector('.popup_type_img');
const popupAddForm = document.querySelector('.popup-add-form');
const popupAvatarForm = document.querySelector('.popup_form_avatar');
const openPopupBtn = document.querySelector('.profile__change');
const openPopupAdd = document.querySelector('.profile__button');
const openPopupAvatar = document.querySelector('.profile__review-edit')
const closePopupAdd = popupAdd.querySelector('.popup__close-button');
const closePopupImg = popupImg.querySelector('.popup__close-button');
const popupNameInput = popupEdit.querySelector('.form__input_type_name');
const popupDescrInput = popupEdit.querySelector('.form__input_type_descr');
const popupPlaceInput = popupAdd.querySelector('.form__input_type_place');
const popupLinkInput = popupAdd.querySelector('.form__input_type_link');
const profileInfo = document.querySelector('.profile__info');
const title = profileInfo.querySelector('.profile__title');
const subtitle = profileInfo.querySelector('.profile__subtitle');
const popupImgPhoto = popupImg.querySelector('.popup__img-ph');
const popupImgTitle = popupImg.querySelector('.popup__img-name')
const userAvatar = document.querySelector('.profile__photo');

const cardsContainer = document.querySelector('.elements');

const popups = Array.from(document.querySelectorAll('.popup'));



const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-27',
  headers: {
    authorization: '2ea07533-10b4-435a-9345-122a0ea3fc9f',
    'Content-Type': 'application/json'
  }
});


const openCardPopup = new PopupWithImage('.popup_type_img');
openCardPopup.setEventListeners();

const openPopupEdit = new UserInfo({ title, subtitle, userAvatar });


const removeCardPopup = new PopupWithSubmit('.popup_delete');
removeCardPopup.setEventListeners();

let myUserId = null;

api.getUserInfoStart()
  .then(data => {
    myUserId = data._id;
    title.textContent = data.name;
    subtitle.textContent = data.about;
    openPopupEdit.setUserAvatar(data);
  })
  .then(() => {
    api.getInitialCards()
      .then(data => {
        cardSection.renderAll(data);
      })
      .catch((err) => {
        console.log(err)
      });
  })
  .catch((err) => {
    console.log(err)
  });

const cardSection = new Section({
  renderer: (data) => {
    const card = new Card({
      data: { ...data, myUserId }
    }, '.elements-item-template', () => {
      openCardPopup.open(data);
    }, handleCardDelete, handleLikeClick, api);
    return card.render();
  }
}, '.elements__list');

function handleCardDelete(cardId) {
  removeCardPopup.open();
  removeCardPopup.setSubmitAction(() => {
    api.deleteCard(cardId)
      .then(() => {
        this._cardElement.remove();
        this._cardElement = null;
        removeCardPopup.close();
      })
      .catch((err) => {
        console.error(err);
      })
  })
}
  function handleLikeClick() {
    if (this._buttonLike.classList.contains('elements__like_active')) {
      this._api.deleteLike(this._id)
        .then((data) => {
          this._buttonLike.classList.remove('elements__like_active');
          this._cardElement.querySelector('.element__likes').textContent = data.likes.length;
        })
        .catch((err) => {
          console.log(err)
        });
    } else {
      this._api.putLike(this._id)
        .then((data) => {
          this._buttonLike.classList.add('elements__like_active');
          this._cardElement.querySelector('.element__likes').textContent = data.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const addCardPopup = new PopupWithForm('.popup_type_add', (cardData) => {
    addCardPopup.renderLoading(true);
    api.setCardServer(cardData)
      .then(data => {
        cardSection.addItem(data, true);
        addCardPopup.close()
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        addCardPopup.renderLoading(false);
      })
  })

  addCardPopup.setEventListeners();

  const popupEditForm = new PopupWithForm('.popup_type_edit', (data) => {
    popupEditForm.renderLoading(true)
    api.setUserInfoData.renderLoading(data)
      .then(() => {
        openPopupEdit.setUserInfoData(data);
        popupEditForm.close();
      })
      .catch((err) => {
        console.err(err);
      })
      .finally(() => {
        popupEditForm.renderLoading(false);
      })
  })

  popupEditForm.setEventListeners();

  
openPopupBtn.addEventListener('click', () => {
document.querySelector('.popup-edit-form').reset();
popupEditForm.open();
const data = openPopupEdit.getUserInfo();
popupNameInput.value = data.name;
popupDescrInput.value = data.job;
profileEditFormValidator.resetValidation();
});

openPopupAdd.addEventListener('click', function () {
  popupAddForm.reset();
  addCardPopup.open();
  profileAddFormValidator.resetValidation();
});

const formAvatar = new PopupWithForm('.popup_refresh', (data) => {
  formAvatar.renderLoading(true);
  api.changeAvatar(data)
  .then(data => {userAvatar.setAttribute('src', data.avatar);
formAvatar.close();
})
.catch((err) => {
  console.error(err);
})
.finally(() => {
  formAvatar.renderLoading(false);
})
})
formAvatar.setEventListeners();

openPopupAvatar.addEventListener('click', () => {
popupAvatarForm.reset();
formAvatar.open();
profileAvatarFormValidator.resetValidation();
})

const profileEditFormValidator = new FormValidator(
  config, document.querySelector('.popup-edit-form')
);
profileEditFormValidator.enableValidation();

const profileAddFormValidator = new FormValidator(
  config, popupAddForm
);
profileAddFormValidator.enableValidation();

const profileAvatarFormValidator = new FormValidator(
  config, popupAvatarForm
);
profileAvatarFormValidator.enableValidation();