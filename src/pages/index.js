import { configValidator } from '../utils/constants.js';
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
const popupAddForm = document.querySelector('.popup-add-form');
const openPopupBtn = document.querySelector('.profile__change');
const openPopupAdd = document.querySelector('.profile__button');
const openPopupAvatar = document.querySelector('.profile__review-edit')
const popupNameInput = popupEdit.querySelector('.form__input_type_name');
const popupDescrInput = popupEdit.querySelector('.form__input_type_descr');
const profileInfo = document.querySelector('.profile__info');
const title = profileInfo.querySelector('.profile__title');
const subtitle = profileInfo.querySelector('.profile__subtitle');
const userAvatar = document.querySelector('.profile__photo');





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

const removeCardPopup = new PopupWithSubmit('.popup_delete')
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
        cardSection.rendererAll(data);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
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

function handleCardDelete(cardId, cardElement) {
  removeCardPopup.open();
  removeCardPopup.setSubmitAction(() => {
    api.deleteCard(cardId)
      .then(() => {
        this.cardElement.remove();  //Если удалить this, то ничего не работает
        this.cardElement = null; 
        removeCardPopup.close();
      })
      .catch((err) => {
        console.error(err);
      });
  })
}

function handleLikeClick() {                                                             
  if (this.buttonLike.classList.contains('elements__like_active')) {
    this._api.deleteLike(this._id)
      .then((data) => {
        this.buttonLike.classList.remove('elements__like_active');
        this.cardElement.querySelector('.element__likes').textContent = data.likes.length;
      })
      .catch((err) => {
        console.log(err); 
      });
  } else {
    this._api.putLike(this._id)
      .then((data) => {
        this.buttonLike.classList.add('elements__like_active');
        this.cardElement.querySelector('.element__likes').textContent = data.likes.length;
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
      addCardPopup.close();
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
  popupEditForm.renderLoading(true);
  api.setUserInfoData(data)
    .then(() => {
      openPopupEdit.setUserInfo(data);
      popupEditForm.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      popupEditForm.renderLoading(false);
    })
})

popupEditForm.setEventListeners();

openPopupBtn.addEventListener("click", function () {
  popupEditForm.open();
  const data = openPopupEdit.getUserInfo();
  popupNameInput.value = data.nameSelector;
  popupDescrInput.value = data.jobSelector;
  profileEditFormValidator.removeValidationErrors();
  profileEditFormValidator.toggleButtonState();
});

openPopupAdd.addEventListener("click", function () {
  addCardPopup.open();
  profileAddFormValidator.removeValidationErrors();
  profileAddFormValidator.toggleButtonState();
});


const formAvatar = new PopupWithForm('.popup_refresh', (data) => {
  formAvatar.renderLoading(true);
  api.changeAvatar(data)
    .then(data => { userAvatar.setAttribute('src', data.avatar);
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
  formAvatar.open();
  profileAvatarFormValidator.removeValidationErrors();
  profileAvatarFormValidator.toggleButtonState();
})

const profileEditFormValidator = new FormValidator(
  configValidator,
  document.querySelector('form[name="profile-name"]')
);

profileEditFormValidator.enableValidation();

const profileAddFormValidator = new FormValidator(
  configValidator,
  popupAddForm);

profileAddFormValidator.enableValidation();

const profileAvatarFormValidator = new FormValidator(
  configValidator,
  document.querySelector('.popup-form-avatar')
);

profileAvatarFormValidator.enableValidation();