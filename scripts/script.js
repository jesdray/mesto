let info = document.querySelector('.profile__info');
let openedPopup = document.querySelector('.profile__edit-button');
let openedAddnewimagePopup = document.querySelector('.profile__add-button')
const popup = document.querySelectorAll('.popup');
const closedPopup = document.querySelectorAll('.popup__close');
const savePopup = document.querySelectorAll('.popup__button')

let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');
let inputName = document.querySelector('.popup__text_script_name');
let inputJob = document.querySelector('.popup__text_script_job');

const elements = document.querySelector('.elements');
const cardsTemplate = document.querySelector('.element-template');

let nameImage = document.querySelector('.popup__text_script_image-name');
let urlImage = document.querySelector('.popup__text_script_image-url');

const popupImage = document.querySelector('.popup__image');
const popupImageName = document.querySelector('.popup__image-name');

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

function renderList() {
    const listItem = initialCards.map(addImage);
    elements.append(...listItem);
};

function addImage(item) {
    const cardsElement = cardsTemplate.content.cloneNode(true);
    const elementImage = cardsElement.querySelector('.element__image');
    const elementName = cardsElement.querySelector('.element__image-name');
    cardsElement.querySelector('.element__button-like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__button-like_active')
    });
    cardsElement.querySelector('.element__trash').addEventListener('click', removeImage );
    elementImage.src = item.link;
    elementImage.alt = item.name;
    elementName.textContent = item.name;
    elementImage.addEventListener('click', openImage)
    return cardsElement;
};

function addNewImage() {
    if (nameImage.value !== '' && urlImage.value !== '') {
    const cardsElement = cardsTemplate.content.cloneNode(true);
    const elementImage = cardsElement.querySelector('.element__image');
    const elementName = cardsElement.querySelector('.element__image-name');
    cardsElement.querySelector('.element__button-like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__button-like_active')
    });
    cardsElement.querySelector('.element__trash').addEventListener('click', removeImage );
    cardsElement.querySelector('.element__image').addEventListener('click', openImage);
    elementImage.src = urlImage.value;
    elementImage.alt = nameImage.value;
    elementName.textContent = nameImage.value;
    elements.prepend(cardsElement);
    urlImage.value = '';
    nameImage.value = '';
 };
}

function removeImage(evt) {
    const targetElement = evt.target;
    const targetItem = targetElement.closest('.element');
    targetItem.remove();
}

function openClosePopupInfo() {
    popup[0].classList.toggle('popup_opened');
    inputName.value = name.textContent;
    inputJob.value = job.textContent;
}

function openClosePopupAddImage() {
    popup[1].classList.toggle('popup_opened');
    inputName.value = name.textContent;
    inputJob.value = job.textContent;
    urlImage.value = '';
    nameImage.value = '';
}

function openImage(evt) {
    const image = evt.target;
    popupImage.src = image.src;
    popupImage.alt = image.alt;
    popupImageName.textContent = image.alt;
    openClosePopupImage();
}

function openClosePopupImage() {
    popup[2].classList.toggle('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    name.textContent = inputName.value;
    job.textContent = inputJob.value;
    openClosePopupInfo()
}

function formSubmitHandlerAddImage(evt) {
    evt.preventDefault();
    addNewImage();
    openClosePopupAddImage();
}

renderList();

popup[0].addEventListener('submit', formSubmitHandler);
popup[1].addEventListener('submit', formSubmitHandlerAddImage);

openedPopup.addEventListener('click', openClosePopupInfo);

openedAddnewimagePopup.addEventListener('click', openClosePopupAddImage)

closedPopup[0].addEventListener('click', openClosePopupInfo);
closedPopup[1].addEventListener('click', openClosePopupAddImage);
closedPopup[2].addEventListener('click', openClosePopupImage);