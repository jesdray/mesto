(()=>{"use strict";var e={54:(e,t,n)=>{e.exports=n.p+"af236f6cf67005f1d7aa.svg"},722:(e,t,n)=>{e.exports=n.p+"df0c965524717a3fd8e9.svg"},36:(e,t,n)=>{e.exports=n.p+"56d2a79e9041d97c5a50.svg"},832:(e,t,n)=>{e.exports=n.p+"bbe2a6eafac19c3d031c.svg"},399:(e,t,n)=>{e.exports=n.p+"bed8c136e13907f5eefb.svg"},984:(e,t,n)=>{e.exports=n.p+"bbe7c5b6093ec0273de1.jpg"},642:(e,t,n)=>{e.exports=n.p+"a274c87c0f6b553b47ad.svg"}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.p="",(()=>{function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n(54),n(722),n(36),n(832),n(399),n(642),n(984);var t=function(){function t(e,n,r,o,i,a,c){var s=e.data,u=e.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=s.name,this._link=s.link,this.likes=s.likes,this.likeActive=!1,this._cardSelector=n,this._handleCardClick=u,this._putLike=i,this._renderTrash=a,this._renderLike=c,this.cardId=s._id,this.popupConfirmDelete=o,this.ownerId=s.owner._id,this.userId=r}var n,r;return n=t,(r=[{key:"_getDataCard",value:function(){return{id:this.cardId,card:this.cardElement}}},{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"createCard",value:function(){return this.cardElement=this._getTemplate(),this.card=this._getDataCard(),this._image=this.cardElement.querySelector(".element__image"),this.like=this.cardElement.querySelector(".element__number-like"),this._btnLike=this.cardElement.querySelector(".element__button-like"),this._image.src=this._link,this._image.alt=this._name,this.like.textContent=this.likes.length,this.cardElement.querySelector(".element__image-name").textContent=this._name,this._setEventListeners(),this.cardElement}},{key:"switchLike",value:function(){this._btnLike.classList.toggle("element__button-like_active")}},{key:"_setEventListeners",value:function(){var e=this;this.cardElement.querySelector(".element__image").addEventListener("click",(function(){e._handleCardClick({name:e._name,url:e._link})})),this._renderLike(),this._renderTrash(),this._btnLike.addEventListener("click",(function(){e._putLike()}))}}])&&e(n.prototype,r),t}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=t,this._inputList=this._form.querySelectorAll(n.inputSelector),this._button=this._form.querySelector(".popup__button"),this._inputSelector=n.inputSelector,this._inactiveButtonClass=n.inactiveButtonClass,this._inputError=n.inputErrorClass,this._errorClass=n.errorClass}var t,n;return t=e,(n=[{key:"_setEventListener",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e.setButtonState(e._button)}))}))}},{key:"_isValid",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_hideError",value:function(e){this._form.querySelector("#".concat(e.id,"-error")).textContent="",e.classList.remove(this._errorClass)}},{key:"_showError",value:function(e){this._form.querySelector("#".concat(e.id,"-error")).textContent=e.validationMessage,e.classList.add(this._errorClass)}},{key:"setButtonState",value:function(){this._form.checkValidity()?(this._button.classList.remove(this._inactiveButtonClass),this._button.disabled=!1):(this._button.classList.add(this._inactiveButtonClass),this._button.disabled=!0)}},{key:"clearErrorField",value:function(){var e=this;this._inputList.forEach((function(t){e._hideError(t)}))}},{key:"enableValidation",value:function(){this._setEventListener()}}])&&r(t.prototype,n),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"addNewItem",value:function(e){this._container.prepend(e)}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"renderer",value:function(){var e=this;this._initialArray.forEach((function(t){var n=e._renderer(t);e.addItem(n)}))}}])&&i(t.prototype,n),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){this._popup.querySelector(".popup__close").addEventListener("click",this.close.bind(this)),this._popup.querySelector(".popup__overlay").addEventListener("click",this.close.bind(this))}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose.bind(this))}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose.bind(this))}}])&&c(t.prototype,n),e}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this))._popup=document.querySelector(".popup_script_open-image"),e._popupImage=document.querySelector(".popup__image"),e._popupImageName=document.querySelector(".popup__image-name"),e}return t=a,(n=[{key:"open",value:function(e){this._popupImage.src=e.url,this._popupImage.alt=e.name,this._popupImageName.textContent=e.name,f(d(a.prototype),"open",this).call(this)}}])&&l(t.prototype,n),a}(s);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e,t,n){var r,o=e.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this))._popup=t,r._form=t.querySelector(".popup__container"),r._sumbitForm=o,r._button=t.querySelector(".popup__button"),r._btnText=t.querySelector(".popup__button").textContent,r._loading=n,r}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._form.querySelectorAll(".popup__input"),this._formValue={},this._inputList.forEach((function(t){e._formValue[t.name]=t.value})),this._formValue}},{key:"renderLoading",value:function(e){this._button.textContent=e?this._loading:this._btnText}},{key:"confirmDelet",value:function(e){this._dataCard=e}},{key:"setСonfirm",value:function(){var e=this;y(g(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e.renderLoading(!0),e._sumbitForm(e._dataCard)}))}},{key:"setEventListeners",value:function(){var e=this;y(g(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e.renderLoading(!0);var n=e._getInputValues();e._sumbitForm(n)}))}},{key:"close",value:function(){y(g(a.prototype),"close",this).call(this),this._form.reset()}}])&&v(t.prototype,n),a}(s);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=t,this._userJob=n,this._container=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfoList={userName:this._userName,userJob:this._userJob},this._userInfoList}},{key:"getUserId",value:function(){return this.userId}},{key:"setUserId",value:function(e){this.userId=e._id}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userJob.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._container.querySelector(".profile__avatar").src=e}}])&&S(t.prototype,n),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"cards"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getUserData",value:function(){return fetch("".concat(this._baseUrl,"users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"editDataUser",value:function(e){return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"postNewCard",value:function(e){return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"editAvatarUser",value:function(e){return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"setLike",value:function(e){return fetch("".concat(this._baseUrl,"cards/likes/").concat(e.id),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseUrl,"cards/likes/").concat(e.id),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&L(t.prototype,n),e}(),j={formSelector:".popup__form",inputSelector:".popup__input",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input_invalid"},q=document.querySelector(".profile__edit-button"),O=document.querySelector(".profile__avatar-overlay"),P=document.querySelector(".profile__add-button"),I=document.querySelector(".popup_script_edit-info"),U=document.querySelector(".popup_script_edit-avatar"),x=document.querySelector(".popup_script_create-image"),T=document.querySelector(".popup_script_confirmation"),D=document.querySelector(".profile__name"),R=document.querySelector(".profile__job"),A=document.querySelector(".popup__input_script_name"),N=document.querySelector(".popup__input_script_job"),F=document.querySelector(".profile"),V=new C({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-20/",headers:{authorization:"18b437da-7ae0-4b48-b130-575ed283765a","Content-Type":"application/json"}});function B(){var e=this;!0===this.likeActive?V.removeLike(this.card).then((function(t){e.like.textContent=t.likes.length,e.likeActive=!1,e.switchLike()})).catch((function(e){console.log(e)})):!1===this.likeActive&&V.setLike(this.card).then((function(t){e.like.textContent=t.likes.length,e.likeActive=!0,e.switchLike()})).catch((function(e){console.log(e)}))}function J(){var e=this;this.userId===this.ownerId&&(this.cardElement.querySelector(".element__trash").classList.add("element__trash_active"),this.cardElement.querySelector(".element__trash").addEventListener("click",(function(){e.popupConfirmDelete.confirmDelet(e.card),e.popupConfirmDelete.open()})))}function G(){var e=this;this.likes.forEach((function(t){e.userId===t._id&&(e.likeActive=!0,e.switchLike())}))}function H(e){return new t({data:e,handleCardClick:function(e){Z.open(e)}},".template_script_card",$.getUserId(),Y,B,J,G)}var z=new o(document.querySelector(".popup__container_script_edit-info"),j);z.enableValidation();var M=new o(document.querySelector(".popup__container_script_edit-avatar"),j);M.enableValidation();var K=new o(document.querySelector(".popup__container_script_create-image"),j);K.enableValidation();var Q=new E({submitForm:function(e){V.editDataUser(e).then((function(){$.setUserInfo(e),Q.close()})).catch((function(e){console.log(e)})).finally((function(){Q.close(),Q.renderLoading(!1)}))}},I,"Сохранение...");Q.setEventListeners();var W=new E({submitForm:function(e){V.editAvatarUser(e).then((function(e){$.setUserAvatar(e.avatar)})).catch((function(e){console.log(e)})).finally((function(){W.close(),W.renderLoading(!1)}))}},U,"Сохранение...");W.setEventListeners();var X=new E({submitForm:function(e){var t={name:e.imageName,link:e.imageUrl};V.postNewCard(t).then((function(e){var t=H(e).createCard();new a({data:e,renderer:function(){}},document.querySelector(".elements")).addNewItem(t)})).catch((function(e){console.log(e)})).finally((function(){X.close(),X.renderLoading(!1)}))}},x,"Создание...");X.setEventListeners();var Y=new E({submitForm:function(e){V.removeCard(e.id).then((function(){e.card.remove()})).catch((function(e){console.log(e)})).finally((function(){Y.close(),Y.renderLoading(!1)}))}},T,"Удаление...");Y.setСonfirm();var Z=new _;Z.setEventListeners();var $=new w(D,R,F),ee=V.getUserData().then((function(e){return e})).catch((function(e){console.log(e)})),te=V.getInitialCards().then((function(e){return e})).catch((function(e){console.log(e)}));Promise.all([{user:ee,cardList:te}]).then((function(e){e[0].user.then((function(e){$.setUserId(e),$.setUserInfo(e),$.setUserAvatar(e.avatar)})).catch((function(e){console.log(e)})),e[0].cardList.then((function(e){new a({data:e,renderer:function(e){return H(e).createCard()}},document.querySelector(".elements")).renderer()}))})),q.addEventListener("click",(function(){var e=$.getUserInfo();A.value=e.userName.textContent,N.value=e.userJob.textContent,z.setButtonState(),z.clearErrorField(),Q.open()})),O.addEventListener("click",(function(){M.setButtonState(),M.clearErrorField(),W.open()})),P.addEventListener("click",(function(){K.setButtonState(),K.clearErrorField(),X.open()}))})()})();