(()=>{"use strict";var e={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__btn",inactiveButtonClass:"form__btn_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._elementForm=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inactiveButtonClass=t.inactiveButtonClass,this._inputList=Array.from(this._elementForm.querySelectorAll(this._inputSelector)),this._buttonElement=this._elementForm.querySelector(this._submitButtonSelector)}var n,r;return n=e,(r=[{key:"_showInputError",value:function(e){var t=this._elementForm.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.classList.add(this._errorClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){var t=this._elementForm.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.add(this._errorClass),t.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_desactivateButton",value:function(){this._buttonElement.disabled=!0,this._buttonElement.classList.add(this._config.inactiveButtonClass)}},{key:"_toggleButtonstate",value:function(){this._hasInvalidInput()?this._desactivateButton():(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._inactiveButtonClass))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e,e.validationMessage):this._showInputError(e)}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonstate()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonstate()}))})),this._toggleButtonstate()}},{key:"enableValidation",value:function(){this._elementForm.addEventListener("submit",(function(e){return e.preventDefault()})),this._setEventListeners()}}])&&t(n.prototype,r),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._templateSelector=n,this._handleOPenPhoto=r,this._makeElements(),this._setEventListenersCard()}var t,n;return t=e,(n=[{key:"_makeElements",value:function(){var e=document.querySelector(this._templateSelector).content.querySelector(".elements__item");this._card=e.cloneNode(!0),this._buttonLike=this._card.querySelector(".elements__like"),this._buttonRemove=this._card.querySelector(".elements__button"),this._cardImg=this._card.querySelector(".elements__img"),this._cardDescription=this._card.querySelector(".elements__title"),this._cardDescription.textContent=this._name,this._cardImg.src=this._link,this._cardImg.alt=this._name}},{key:"_setEventListenersCard",value:function(){var e=this;this._buttonRemove.addEventListener("click",(function(){e._handleDeleteCard()})),this._buttonLike.addEventListener("click",(function(){e._handleLikeClick()})),this._cardImg.addEventListener("click",(function(){e._showImageCard()}))}},{key:"_handleDeleteCard",value:function(){this._card.remove(),this._card=null}},{key:"_handleLikeClick",value:function(){this._buttonLike.classList.toggle("elements__like_active")}},{key:"_showImageCard",value:function(){this._handleOPenPhoto({name:this._name,link:this._link})}},{key:"render",value:function(){return this._card}}])&&r(t.prototype,n),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popupSelector=t,this.popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this.popup.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close-button"))&&e.close()}))}},{key:"open",value:function(){this.popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this.popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&i(t.prototype,n),e}();function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function u(e){var t,n=e.popupSelector,r=e.submitOn;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._submitOn=r,t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=Array.from(this.formElement.querySelectorAll(".form__input")),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;c(f(u.prototype),"setEventListeners",this).call(this),this.formElement=this.popup.querySelector(".form"),this.formElement.addEventListener("submit",(function(t){t.preventDefault(),e._submitOn(e._getInputValues())}))}},{key:"close",value:function(){c(f(u.prototype),"close",this).call(this),this.formElement.reset()}}])&&a(t.prototype,n),u}(u);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e)).nameCard=t.popup.querySelector(".popup__img-name"),t.linkCard=t.popup.querySelector(".popup__img-ph"),t}return t=u,(n=[{key:"open",value:function(e){this.linkCard.src=e.link,this.nameCard.textContent=e.name,this.nameCard.alt=e.name,y(b(u.prototype),"open",this).call(this)}}])&&d(t.prototype,n),u}(u);function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._element=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderAll",value:function(){var e=this;this._items.forEach((function(t){e.addItem(t)}))}},{key:"addItem",value:function(e){this._element.prepend(this._renderer(e))}}])&&g(t.prototype,n),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n=t.name,r=t.job;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._dataSelectorName=n,this._dataSelectorJob=r,this._userName=document.querySelector(this._dataSelectorName),this._userJob=document.querySelector(this._dataSelectorJob)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userData={name:this._userName.textContent,job:this._userJob.textContent},this._userData}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.inputInfoname,this._userJob.textContent=e.inputInfoDescr}}])&&E(t.prototype,n),e}(),C=document.querySelector(".popup_type_edit"),L=document.querySelector(".popup_type_add"),O=document.querySelector(".popup_type_img"),q=(document.querySelector(".popup-add-form"),document.querySelector(".profile__change")),j=document.querySelector(".profile__button"),I=(C.querySelector(".popup__close-button"),L.querySelector(".popup__close-button"),O.querySelector(".popup__close-button"),C.querySelector(".form__input_type_name")),P=C.querySelector(".form__input_type_descr"),R=(L.querySelector(".form__input_type_place"),L.querySelector(".form__input_type_link"),document.querySelector(".profile__info")),B=(R.querySelector(".profile__title"),R.querySelector(".profile__subtitle"),O.querySelector(".popup__img-ph"),O.querySelector(".popup__img-name"),document.querySelector(".elements"),Array.from(document.querySelectorAll(".popup")),new S({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){return new o(e,".elements-item-template",(function(e){V.open(e)})).render()}},".elements__list"));B.renderAll();var x=new w({name:".profile__title",job:".profile__subtitle"}),D=new _({popupSelector:".popup_type_edit",submitOn:function(e){x.setUserInfo(e),D.close()}});D.setEventListeners(),q.addEventListener("click",(function(){var e=x.getUserInfo();I.value=e.name,P.value=e.job,D.open(),A.resetValidation()}));var V=new k(".popup_type_img");V.setEventListeners();var T=new _({popupSelector:".popup_type_add",submitOn:function(e){var t={name:e.inputInfoPlace,link:e.inputInfoLink};B.addItem(t),T.close()}});T.setEventListeners(),j.addEventListener("click",(function(){T.open(),F.resetValidation()}));var A=new n(e,C);A.enableValidation();var F=new n(e,L);F.enableValidation()})();