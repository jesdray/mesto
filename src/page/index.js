import editButton from '../images/edit_button.svg';
import like from '../images/like.svg';
import likeActive from '../images/like_active.svg';
import logo from '../images/logo.svg';
import plus from '../images/plus.svg';
import trash from '../images/trash.svg';
import profileAvatar from '../images/profile_avatar.jpg';
import '../page/index.css'

import {initialCards} from '../components/initialCards.js'
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'

const enableValidationConfig = ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input_invalid'
  }); 

const openedPopup = document.querySelector('.profile__edit-button');
const openedAddNewImagePopup = document.querySelector('.profile__add-button')

const popupEditInfo = document.querySelector('.popup_script_edit-info');
const popupCreateImage = document.querySelector('.popup_script_create-image');

const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
const inputName = document.querySelector('.popup__input_script_name');
const inputJob = document.querySelector('.popup__input_script_job');

const profileInfo = document.querySelector('.profile__info')

function newCard(data) {
    const card = new Card({ data,
                            handleCardClick: (data) => {
                            popupImage.open(data);
                            }
                            },
                            '.template_script_card');
    return card;
}

const formProfile = new FormValidator(document.querySelector('.popup__container_script_edit-info'), enableValidationConfig);
formProfile.enableValidation();

const formImage = new FormValidator(document.querySelector('.popup__container_script_create-image'), enableValidationConfig);
formImage.enableValidation();

const popupInfo = new PopupWithForm({submitForm: (value) => {
                                        const inputValue = value;
                                        userInfo.setUserInfo(inputValue);
                                        popupInfo.close();
                                    }}, popupEditInfo);

popupInfo.setEventListeners();

const popupImageCreate = new PopupWithForm({submitForm: (value) => {
                                                const inputValues = value;
                                                const data = {  name: inputValues.imageName,
                                                                link: inputValues.imageUrl}
                                                const card = newCard(data);
                                                const cardElement = card.createCard();
                                                cardList.addItem(cardElement);
                                                popupImageCreate.close();
                                            }}, popupCreateImage);

popupImageCreate.setEventListeners();

const popupImage = new PopupWithImage();

popupImage.setEventListeners();

const userInfo = new UserInfo(name, job, profileInfo)

const cardList = new Section({
    data: initialCards,
    renderer: (item) => {
        const data = item;
        const card = newCard(data)
        const cardElement = card.createCard();

        return cardElement;
    }
}, document.querySelector('.elements'))

function openPopupInfo() {
    const data = userInfo.getUserInfo();
    inputName.value = data.userName.textContent;
    inputJob.value = data.userJob.textContent;
    formProfile.setButtonState()
    formProfile.clearErrorField()
    popupInfo.open();
}

function openPopupCreateImage() {
    formImage.setButtonState()
    formImage.clearErrorField();
    popupImageCreate.open();
}

cardList.renderer();

openedPopup.addEventListener('click', openPopupInfo);

openedAddNewImagePopup.addEventListener('click', openPopupCreateImage)