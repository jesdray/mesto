import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js'
import UserInfo from './UserInfo.js'

const enableValidationConfig = ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input_invalid'
  }); 

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

const overlayOpenImage = document.querySelector('.popup__overlay_script_open-image');
const popupCloseOpenImage = document.querySelector('.popup__close_script_open-image');

const openedPopup = document.querySelector('.profile__edit-button');
const openedAddNewImagePopup = document.querySelector('.profile__add-button')

const popupEditInfo = document.querySelector('.popup_script_edit-info');
const popupCreateImage = document.querySelector('.popup_script_create-image');

const popupCloseEditInfo = document.querySelector('.popup__close_scripy_edit-info');
const popupCloseCreateImage = document.querySelector('.popup__close_script_create-image');

const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
const inputName = document.querySelector('.popup__input_script_name');
const inputJob = document.querySelector('.popup__input_script_job');

const profileInfo = document.querySelector('.profile__info')


const nameImage = document.querySelector('.popup__input_script_image-name');
const urlImage = document.querySelector('.popup__input_script_image-url');


const overlayPopupEditInfo = document.querySelector('.popup__overlay_script_edit-info');
const overlayPopupCreateImage = document.querySelector('.popup__overlay_script_create-image');

const formProfile = new FormValidator(document.querySelector('.popup__container_script_edit-info'), enableValidationConfig);
formProfile.enableValidation();

const formImage = new FormValidator(document.querySelector('.popup__container_script_create-image'), enableValidationConfig);
formImage.enableValidation();

const popupInfo = new PopupWithForm (popupEditInfo, submitEditInfoForm);
const popupImageCreate = new PopupWithForm (popupCreateImage, submitEditInfoForm);
const popupImage = new PopupWithImage();

const userInfo = new UserInfo(name, job, profileInfo)

const cardList = new Section({
    data: initialCards,
    renderer: (item) => {
        const data = item;
        const card = new Card({ data,
                                handleCardClick: (data) => {
                                     popupImage.open(data);
                                }
                                },
                                '.template_script_card');
        const cardElement = card.createCard();

        return cardElement;
    }
}, document.querySelector('.elements'))

function closeEditInfoPopup() {
    popupInfo.close();
}

function closeCreateImagePopup() {
    popupImageCreate.close();
}

function closeOpenImage() {
    popupImage.close();
}

function openPopupInfo() {
    const data = userInfo.getUserInfo();
    inputName.value = data.userName.textContent;
    inputJob.value = data.userJob.textContent;
    formProfile.setButtonState()
    formProfile.clearErrorField()
    popupInfo.open();
}

function openPopupCreateImage() {
    popupCreateImage.querySelector('.popup__form').reset();
    formImage.setButtonState()
    formImage.clearErrorField();
    popupImageCreate.open();
}

function openImage(evt) {
    const image = evt.target;
    popupImage.open(image);
}


function submitEditInfoForm(evt) {
    evt.preventDefault();
    const inputValue = popupInfo._getInputValues();
    userInfo.setUserInfo(inputValue);
    closeEditInfoPopup()
}

function submitAddImageForm(evt) {
    evt.preventDefault();
    const inputValues = popupImageCreate._getInputValues();

    const data = {  name: inputValues.imageName,
                    link: inputValues.imageUrl}

    const card = new Card({
                            data,
                            handleCardClick: (data) => {
                                popupImage.open(data);
                            }
                            },
                            '.template_script_card');
    const cardElement = card.createCard();

    cardList.addItem(cardElement);
    closeCreateImagePopup();
}

// initialCards.forEach(data => {
//     const card = new Card({ data,
//                             handleCardClick: (data) => {
//                                 popupImage.open(data);
//                             }
//                             },
//                             '.template_script_card');
//     const cardElement = card.createCard();

//     document.querySelector('.elements').append(cardElement);
// });

cardList.renderer();

popupEditInfo.addEventListener('submit', submitEditInfoForm);
popupCreateImage.addEventListener('submit', submitAddImageForm);

openedPopup.addEventListener('click', openPopupInfo);

openedAddNewImagePopup.addEventListener('click', openPopupCreateImage)

overlayPopupEditInfo.addEventListener('click', closeEditInfoPopup);
overlayPopupCreateImage.addEventListener('click', closeCreateImagePopup);
overlayOpenImage.addEventListener('click', closeOpenImage);

popupCloseEditInfo.addEventListener('click', closeEditInfoPopup);
popupCloseCreateImage.addEventListener('click', closeCreateImagePopup);
popupCloseOpenImage.addEventListener('click', closeOpenImage);

export {openImage}
