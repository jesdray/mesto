import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

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

const popupImage = document.querySelector('.popup__image');
const popupImageName = document.querySelector('.popup__image-name');
const popupOpenImage = document.querySelector('.popup_script_open-image');
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


const nameImage = document.querySelector('.popup__input_script_image-name');
const urlImage = document.querySelector('.popup__input_script_image-url');


const overlayPopupEditInfo = document.querySelector('.popup__overlay_script_edit-info');
const overlayPopupCreateImage = document.querySelector('.popup__overlay_script_create-image');

const formProfile = new FormValidator(document.querySelector('.popup__container_script_edit-info'), enableValidationConfig);
formProfile.enableValidation();

const formImage = new FormValidator(document.querySelector('.popup__container_script_create-image'), enableValidationConfig);
formImage.enableValidation();


function closeKeyDown(evt) {
    if (evt.key === "Escape") {
        const itm = document.querySelector('.popup_opened');
        closePopup(itm);
    }
};

function closePopup(itm) {
    itm.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeKeyDown);
}

function closeEditInfoPopup() {
    closePopup(popupEditInfo);
}

function closeCreateImagePopup() {
    closePopup(popupCreateImage);
}

function closeOpenImage() {
    closePopup(popupOpenImage)
}

function openPopup(itm) {
    itm.classList.add('popup_opened');
    document.addEventListener('keydown', closeKeyDown);
}

function openPopupInfo() {
    inputName.value = name.textContent;
    inputJob.value = job.textContent;
    formProfile.setButtonState()
    formProfile.clearErrorField()
    openPopup(popupEditInfo);
}

function openPopupCreateImage() {
    popupCreateImage.querySelector('.popup__form').reset();
    formImage.setButtonState()
    formImage.clearErrorField();
    openPopup(popupCreateImage);
}

function openImage(evt) {
    const image = evt.target;
    popupImage.src = image.src;
    popupImage.alt = image.alt;
    popupImageName.textContent = image.alt;
    openPopup(popupOpenImage);
}

function submitEditInfoForm(evt) {
    evt.preventDefault();
    name.textContent = inputName.value;
    job.textContent = inputJob.value;
    closeEditInfoPopup()
}

function submitAddImageForm(evt) {
    evt.preventDefault();
    const data = [{name: nameImage.value,
                   link: urlImage.value}];
    const card = new Card(data[0],
                            '.template_script_card');
    const cardElement = card.createCard();

    document.querySelector('.elements').prepend(cardElement);
    closeCreateImagePopup();
}

initialCards.forEach(itm => {
    const card = new Card(itm, '.template_script_card');
    const cardElement = card.createCard();

    document.querySelector('.elements').append(cardElement);
});

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