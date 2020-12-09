const info = document.querySelector('.profile__info');
const openedPopup = document.querySelector('.profile__edit-button');
const openedAddNewImagePopup = document.querySelector('.profile__add-button')

const popupEditInfo = document.querySelector('.popup_script_edit-info');
const popupCreateImage = document.querySelector('.popup_script_create-image');
const popupOpenImage = document.querySelector('.popup_script_open-image');

const popupCloseEditInfo = document.querySelector('.popup__close_scripy_edit-info');
const popupCloseCreateImage = document.querySelector('.popup__close_script_create-image');
const popupCloseOpenImage = document.querySelector('.popup__close_script_open-image');

const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
const inputName = document.querySelector('.popup__text_script_name');
const inputJob = document.querySelector('.popup__text_script_job');

const elements = document.querySelector('.elements');
const cardsTemplate = document.querySelector('.element-template');

const nameImage = document.querySelector('.popup__text_script_image-name');
const urlImage = document.querySelector('.popup__text_script_image-url');

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
    const listItem = initialCards.map(createImage);
    elements.append(...listItem);
};

function createImage(item) {
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

function createNewImage() {
    if (nameImage.value !== '' && urlImage.value !== '') {
    const imageName = nameImage.value;
    const imageUrl = urlImage.value;
    const item = createImage({ name: imageName, link: imageUrl });
    elements.prepend(item);
    urlImage.value = '';
    nameImage.value = '';
 };
}

function removeImage(evt) {
    const targetElement = evt.target;
    const targetItem = targetElement.closest('.element');
    targetItem.remove();
}

function closePopup(itm) {
    itm.classList.remove('popup_opened');
}

function closeEditInfoPopup() {
    const itm = popupEditInfo;
    closePopup(itm);
}

function closeCreateImagePopup() {
    const itm = popupCreateImage;
    closePopup(itm);
}

function closeOpenImagePopup() {
    const itm = popupOpenImage;
    closePopup(itm);
}

function openPopup(itm) {
    itm.classList.add('popup_opened');
}

function openPopupInfo() {
    const itm = popupEditInfo;
    openPopup(itm)
    inputName.value = name.textContent;
    inputJob.value = job.textContent;
}

function openPopupCreateImage() {
    const itm = popupCreateImage;
    openPopup(itm)
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
    openPopupImage();
}

function openPopupImage() {
    const itm = popupOpenImage;
    openPopup(itm);
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

renderList();

popupEditInfo.addEventListener('submit', formSubmitHandler);
popupCreateImage.addEventListener('submit', formSubmitHandlerAddImage);

openedPopup.addEventListener('click', openPopupInfo);

openedAddNewImagePopup.addEventListener('click', openPopupCreateImage)

popupCloseEditInfo.addEventListener('click', closeEditInfoPopup);
popupCloseCreateImage.addEventListener('click', closeCreateImagePopup);
popupCloseOpenImage.addEventListener('click', closeOpenImagePopup);