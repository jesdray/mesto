let info = document.querySelector('.profile__info');
let openedPopup = document.querySelector('.profile__edit-button');
let openedAddnewimagePopup = document.querySelector('.profile__add-button')
const input = document.querySelectorAll('.popup');
const closedPopup = document.querySelectorAll('.popup__close');
const savePopup = document.querySelectorAll('.popup__button')
const form = document.querySelectorAll('.popup__container');

let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');
let inputName = document.querySelector('.popup__text_script_name');
let inputJob = document.querySelector('.popup__text_script_job');

const elements = document.querySelector('.elements');
const cardsTemplate = document.querySelector('.element-template')

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
    return cardsElement;
};

function addNewImage() {

}

function removeImage(evt) {
    const targetElement = evt.target;
    const targetItem = targetElement.closest('.element');
    targetItem.remove();
}

function openClosePopup() {
    input.classList.toggle('popup_opened');
    inputName.value = name.textContent;
    inputJob.value = job.textContent;
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    name.textContent = inputName.value;
    job.textContent = inputJob.value;
    openClosePopup()
}

console.log(input);
console.log(closedPopup);
console.log(savePopup);
console.log(form);

renderList();

input.addEventListener('submit', formSubmitHandler);

openedPopup.addEventListener('click', openClosePopup);

openedAddnewimagePopup.addEventListener('click', openClosePopup)

closedPopup.addEventListener('click', openClosePopup);