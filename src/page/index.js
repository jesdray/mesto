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
import Api from '../components/Api.js'

const enableValidationConfig = ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input_invalid'
  }); 

const openedPopup = document.querySelector('.profile__edit-button');
const openedPopupEditAvatar = document.querySelector('.profile__avatar-overlay')
const openedAddNewImagePopup = document.querySelector('.profile__add-button')

const popupEditInfo = document.querySelector('.popup_script_edit-info');
const popupEditAvatar = document.querySelector('.popup_script_edit-avatar');
const popupCreateImage = document.querySelector('.popup_script_create-image');
const popupConfirm = document.querySelector('.popup_script_confirmation');

const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
const inputName = document.querySelector('.popup__input_script_name');
const inputJob = document.querySelector('.popup__input_script_job');

const profileInfo = document.querySelector('.profile')

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-20/',
    headers: {
      authorization: '18b437da-7ae0-4b48-b130-575ed283765a',
      'Content-Type': 'application/json'
    }
}); 

function newCard(data) {
    const card = new Card({ data,
                            handleCardClick: (data) => {
                            popupImage.open(data);
                            }
                            },
                            '.template_script_card',
                            user,
                            popupConfirmDelete,
                            api);
    return card;
}

const formProfile = new FormValidator(document.querySelector('.popup__container_script_edit-info'), enableValidationConfig);
formProfile.enableValidation();

const formAvatar = new FormValidator(document.querySelector('.popup__container_script_edit-avatar'), enableValidationConfig);
formAvatar.enableValidation();

const formImage = new FormValidator(document.querySelector('.popup__container_script_create-image'), enableValidationConfig);
formImage.enableValidation();

const popupInfo = new PopupWithForm({submitForm: (value) => {
                                        api
                                            .editDataUser(value)
                                            .then(() => {
                                                userInfo.setUserInfo(value);
                                                popupInfo.close();
                                            })
                                            .finally(() => {
                                                popupInfo.close();
                                                popupInfo.renderLoading(false)
                                            })
                                    }}, popupEditInfo,
                                    'Сохранение...');

popupInfo.setEventListeners();

const popupAvatar = new PopupWithForm({submitForm: (value) => {
                                        api
                                            .editAvatarUser(value)
                                            .then(data => {
                                                userInfo.setUserAvatar(data.avatar);
                                            })
                                            .finally(() => {
                                                popupAvatar.close();
                                                popupAvatar.renderLoading(false)
                                            })
                                    }
                                    }, popupEditAvatar,
                                    'Сохранение...')
popupAvatar.setEventListeners();

const popupImageCreate = new PopupWithForm({submitForm: (value) => {
                                                const data = {  name: value.imageName,
                                                                link: value.imageUrl}
                                                api
                                                    .postNewCard(data)
                                                    .then(data => {
                                                        const card = newCard(data);
                                                        const cardElement = card.createCard();
                                                        const section = new Section({
                                                                                    data: data,
                                                                                    renderer: () => {}
                                                                                    }, document.querySelector('.elements'))
                                                        section.addNewItem(cardElement);
                                                    })
                                                    .finally(() => {
                                                        popupImageCreate.close();
                                                        popupImageCreate.renderLoading(false)
                                                    })
                                            }}, popupCreateImage,
                                            'Создание...');

popupImageCreate.setEventListeners();

const popupConfirmDelete = new PopupWithForm({submitForm: (data) => {
                                                api
                                                    .removeCard(data.id)
                                                    .then(() => {
                                                        data.card.remove();
                                                    })
                                                    .finally(() => {
                                                        popupConfirmDelete.close()
                                                        popupConfirmDelete.renderLoading(false)
                                                    })
                                            }}, popupConfirm,
                                            'Удаление...')

popupConfirmDelete.setСonfirm();

const popupImage = new PopupWithImage();

popupImage.setEventListeners();

const userInfo = new UserInfo(name, job, profileInfo) 

const user = api
    .getUserData()
    .then(data => {
        userInfo.setUserInfo(data);
        userInfo.setUserAvatar(data.avatar);
        return data
})

api
    .getInitialCards()
    .then(data => {
        const cardList = new Section({
            data: data,
            renderer: (item) => {
                const data = item;
                const card = newCard(data)
                const cardElement = card.createCard();
        
                return cardElement;
            }
        }, document.querySelector('.elements'))

        cardList.renderer();
})

function openPopupInfo() {
    const data = userInfo.getUserInfo();
    inputName.value = data.userName.textContent;
    inputJob.value = data.userJob.textContent;
    formProfile.setButtonState();
    formProfile.clearErrorField();
    popupInfo.open();
}

function openPopupCreateImage() {
    formImage.setButtonState();
    formImage.clearErrorField();
    popupImageCreate.open();
}

function openEditAvatar() {
    formAvatar.setButtonState();
    formAvatar.clearErrorField();
    popupAvatar.open();
}

openedPopup.addEventListener('click', openPopupInfo);

openedPopupEditAvatar.addEventListener('click', openEditAvatar);

openedAddNewImagePopup.addEventListener('click', openPopupCreateImage);