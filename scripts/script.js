import {Card, popupOpenImage, elements} from './Card';

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

const info = document.querySelector('.profile__info');
const openedPopup = document.querySelector('.profile__edit-button');
const openedAddNewImagePopup = document.querySelector('.profile__add-button')

const popupEditInfo = document.querySelector('.popup_script_edit-info');
const popupCreateImage = document.querySelector('.popup_script_create-image');

const formEditInfo = popupEditInfo.querySelector('.popup__form')
const formCreateImage = popupCreateImage.querySelector('.popup__form')

const inputEditInfoList = popupEditInfo.querySelectorAll('.popup__input');
const inputCreateImageList = popupCreateImage.querySelectorAll('.popup__input');

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

function keyDownClose(evt) {
    if (evt.key === "Escape") {
        const itm = document.querySelector('.popup_opened');
        closePopup(itm);
    }
};

function closePopup(itm) {
    itm.classList.remove('popup_opened');
    document.removeEventListener('keydown', keyDownClose);
}

function closeEditInfoPopup() {
    closePopup(popupEditInfo);
    clearingErrorFillerForm(formEditInfo, inputEditInfoList, enableValidationConfig);
}

function closeCreateImagePopup() {
    closePopup(popupCreateImage);
    clearingErrorFillerForm(formCreateImage, inputCreateImageList, enableValidationConfig);

}

function closeOpenImagePopup() {
    closePopup(popupOpenImage);
}

function openPopup(itm) {
    itm.classList.add('popup_opened');
    document.addEventListener('keydown', keyDownClose);
}

function openPopupInfo() {
    inputName.value = name.textContent;
    inputJob.value = job.textContent;
    clearingErrorFillerForm(formEditInfo, inputEditInfoList, enableValidationConfig);
    setButtonState(formEditInfo.querySelector('.popup__button'), formEditInfo.checkValidity(), enableValidationConfig);
    openPopup(popupEditInfo);
}

function openPopupCreateImage() {
    urlImage.value = '';
    nameImage.value = '';
    setButtonState(formCreateImage.querySelector('.popup__button'), formCreateImage.checkValidity(), enableValidationConfig);
    openPopup(popupCreateImage);
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    name.textContent = inputName.value;
    job.textContent = inputJob.value;
    closeEditInfoPopup()
}

function formSubmitHandlerAddImage(evt) {
    evt.preventDefault();
    createNewImage();
    closeCreateImagePopup();
}

initialCards.forEach(itm => {
    const card = new Card(itm, '.template_script_card');

    elements.append(card);
});

popupEditInfo.addEventListener('submit', formSubmitHandler);
popupCreateImage.addEventListener('submit', formSubmitHandlerAddImage);

openedPopup.addEventListener('click', openPopupInfo);

openedAddNewImagePopup.addEventListener('click', openPopupCreateImage)

overlayPopupEditInfo.addEventListener('click', closeEditInfoPopup);
overlayPopupCreateImage.addEventListener('click', closeCreateImagePopup);

popupCloseEditInfo.addEventListener('click', closeEditInfoPopup);
popupCloseCreateImage.addEventListener('click', closeCreateImagePopup);