(()=>{"use strict";var e={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__btn",inactiveButtonClass:"form__btn_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._elementForm=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inactiveButtonClass=t.inactiveButtonClass,this._inputList=Array.from(this._elementForm.querySelectorAll(this._inputSelector)),this._buttonElement=this._elementForm.querySelector(this._submitButtonSelector)}var n,r;return n=e,(r=[{key:"_showInputError",value:function(e){var t=this._elementForm.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.classList.add(this._errorClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){var t=this._elementForm.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.add(this._errorClass),t.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_desactivateButton",value:function(){this._buttonElement.disabled=!0,this._buttonElement.classList.add(this._config.inactiveButtonClass)}},{key:"_toggleButtonstate",value:function(){this._hasInvalidInput()?this._desactivateButton():(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._inactiveButtonClass))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e,e.validationMessage):this._showInputError(e)}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonstate()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonstate()}))})),this._toggleButtonstate()}},{key:"enableValidation",value:function(){this._elementForm.addEventListener("submit",(function(e){return e.preventDefault()})),this._setEventListeners()}}])&&t(n.prototype,r),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n,r,o,i,c){var u=t.data;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=u,this._title=u.name,this._link=u.link,this._likes=this._data.likes,this._id=u._id,this._currentUserId=u.myUserId,this._templateSelector=n,this.handleCardClick=r,this.handleRemoveClick=o,this.handleLikeClick=i,this._api=c}var t,n;return t=e,(n=[{key:"_makeElements",value:function(){var e=document.querySelector(this._templateSelector);return this._cardElement=e.content.querySelector(".elements__item").cloneNode(!0),this._cardElement}},{key:"_setEventListeners",value:function(){var e=this;this._buttonRemove=this._cardElement.querySelector(".elements__button"),this._buttonLike=this._cardElement.querySelector(".elements__like"),this._cardImg=this._cardElement.querySelector(".elements__img"),this._buttonRemove.addEventListener("click",(function(){e.handleRemoveClick()})),this._buttonLike.addEventListener("click",(function(){e.handleLikeClick()})),this._cardImg.addEventListener("click",(function(){e.handleCardClick()}))}},{key:"_checkMyLike",value:function(){var e=this;this._likes.some((function(t){t._id===e._currentUserId&&e._buttonLike.classList.add("elements__like_active")}))}},{key:"render",value:function(){return this._cardElement=this._makeElements(),this._setEventListeners(),this._checkMyLike(),this._cardElement.querySelector(".elements__title").textContent=this._title,this._cardImg.src=this._link,this._cardImg.alt=this._title,this._cardElement.querySelector(".element__likes").textContent=this._likes.length,this._data.owner._id!==this._currentUserId&&this._buttonRemove.remove(),this._cardElement}}])&&r(t.prototype,n),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popupSelector=t,this._handleEscClose=this._handleEscClose.bind(this),this.popupElement=document.querySelector(t)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this.popupElement.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close-button"))&&e.close()}))}},{key:"open",value:function(){this.popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this.popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&i(t.prototype,n),e}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e))._submitOn=t,n.saveButton=document.querySelector(".form__btn"),n._formElement=document.querySelector(".form"),n}return t=c,(n=[{key:"_getInputvalues",value:function(){var e={};return Array.from(this.formElement.querySelectorAll(".form__input")).forEach((function(t){e[t.name]=t.value})),e}},{key:"close",value:function(){this._formElement.reset(),s(p(c.prototype),"close",this).call(this)}},{key:"renderLoading",value:function(e){this.saveButton.textContent=e?"Сохранение...":"Сохранить"}},{key:"setEventListeners",value:function(){var e=this;s(p(c.prototype),"setEventListeners",this).call(this),this.formElement=this.popupElement.querySelector(".form"),this.formElement.addEventListener("submit",(function(t){t.preventDefault(),e._submitOn(e._getInputValues())}))}}])&&a(t.prototype,n),c}(c);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).nameCard=t.popupElement.querySelector(".popup__img-name"),t.linkCard=t.popupElement.querySelector(".popup__img-ph"),t}return t=c,(n=[{key:"open",value:function(e){this.linkCard.src=e.link,this.nameCard.textContent=e.name,this.nameCard.alt=e.name,y(b(c.prototype),"open",this).call(this)}}])&&d(t.prototype,n),c}(c);function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._element=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderAll",value:function(e){var t=this;e.forEach((function(e){t.addItem(e)}))}},{key:"addItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?this._element.prepend(this._renderer(e)):this._element.append(this._renderer(e))}}])&&k(t.prototype,n),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n=t.title,r=t.subtitle,o=t.userAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._titleSelector=n,this._subtitleSelector=r,this._avatarSelector=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.nameSelector=this._titleSelector.textContent,e.jobSelector=this._subtitleSelector.textContent,e}},{key:"setUserInfo",value:function(e){this._titleSelector.textContent=e.name,this._subtitleSelector.textContent=e.job}},{key:"setUserAvatar",value:function(e){this._avatarSelector.src=e._avatar}}])&&S(t.prototype,n),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._getResponse)}},{key:"getUserInfoStart",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._getResponse)}},{key:"setUserInfoData",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.job})}).then(this._getResponse)}},{key:"setCardServer",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._getResponse)}},{key:"putLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._getResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this_getResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponse)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.link})}).then(this._getResponse)}}])&&O(t.prototype,n),e}();function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t,n){return(q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._formElement=document.querySelector(".form"),t}return t=c,(n=[{key:"setSubmitAction",value:function(e){this._submitHandler=e}},{key:"setEventListeners",value:function(){var e=this;q(I(c.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit}))}}])&&j(t.prototype,n),c}(c);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D=document.querySelector(".popup_type_edit"),U=document.querySelector(".popup_type_add"),V=document.querySelector(".popup_type_img"),F=document.querySelector(".popup-add-form"),M=document.querySelector(".popup-form-avatar"),N=document.querySelector(".profile__change"),H=document.querySelector(".profile__button"),J=document.querySelector(".profile__review-edit"),z=(U.querySelector(".popup__close-button"),V.querySelector(".popup__close-button"),D.querySelector(".form__input_type_name")),G=D.querySelector(".form__input_type_descr"),K=(U.querySelector(".form__input_type_place"),U.querySelector(".form__input_type_link"),document.querySelector(".profile__info")),Q=K.querySelector(".profile__title"),W=K.querySelector(".profile__subtitle"),X=(V.querySelector(".popup__img-ph"),V.querySelector(".popup__img-name"),document.querySelector(".profile__photo")),Y=(document.querySelector(".elements"),Array.from(document.querySelectorAll(".popup")),new L({url:"https://mesto.nomoreparties.co/v1/cohort-27",headers:{authorization:"2ea07533-10b4-435a-9345-122a0ea3fc9f","Content-Type":"application/json"}})),Z=new g(".popup_type_img");Z.setEventListeners();var $=new w({title:Q,subtitle:W,userAvatar:X}),ee=new B(".popup_delete");ee.setEventListeners();var te=null;Y.getUserInfoStart().then((function(e){te=e._id,Q.textContent=e.name,W.textContent=e.about,$.setUserAvatar(e)})).then((function(){Y.getInitialCards().then((function(e){ne.renderAll(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}));var ne=new E({renderer:function(e){return new o({data:x(x({},e),{},{myUserId:te})},".elements-item-template",(function(){Z.open(e)}),re,oe,Y).render()}},".elements__list");function re(e){var t=this;ee.open(),ee.setSubmitAction((function(){Y.deleteCard(e).then((function(){t._cardElement.remove(),t._cardElement=null,ee.close()})).catch((function(e){console.error(e)}))}))}function oe(){var e=this;this._buttonLike.classList.contains("elements__like_active")?this._api.deleteLike(this._id).then((function(t){e._buttonLike.classList.remove("elements__like_active"),e._cardElement.querySelector(".element__likes").textContent=t.likes.length})).catch((function(e){console.log(e)})):this._api.putLike(this._id).then((function(t){e._buttonLike.classList.add("elements__like_active"),e._cardElement.querySelector(".element__likes").textContent=t.likes.length})).catch((function(e){console.log(e)}))}var ie=new h(".popup_type_add",(function(e){ie.renderLoading(!0),Y.setCardServer(e).then((function(e){ne.addItem(e,!0),ie.close()})).catch((function(e){console.error(e)})).finally((function(){ie.renderLoading(!1)}))}));ie.setEventListeners();var ce=new h(".popup_type_edit",(function(e){ce.renderLoading(!0),Y.setUserInfoData.renderLoading(e).then((function(){$.setUserInfoData(e),ce.close()})).catch((function(e){console.err(e)})).finally((function(){ce.renderLoading(!1)}))}));ce.setEventListeners(),N.addEventListener("click",(function(){document.querySelector(".popup-edit-form").reset(),ce.open();var e=$.getUserInfo();z.value=e.name,G.value=e.job,ae.resetValidation()})),H.addEventListener("click",(function(){F.reset(),ie.open(),se.resetValidation()}));var ue=new h(".popup_refresh",(function(e){ue.renderLoading(!0),Y.changeAvatar(e).then((function(e){X.setAttribute("src",e.avatar),ue.close()})).catch((function(e){console.error(e)})).finally((function(){ue.renderLoading(!1)}))}));ue.setEventListeners(),J.addEventListener("click",(function(){M.reset(),ue.open(),le.resetValidation()}));var ae=new n(e,document.querySelector(".popup-edit-form"));ae.enableValidation();var se=new n(e,F);se.enableValidation();var le=new n(e,M);le.enableValidation()})();