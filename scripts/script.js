const info = document.querySelector('.profile__info');
const openedPopup = document.querySelector('.profile__edit-button');
const openedAddNewImagePopup = document.querySelector('.profile__add-button')

const popupEditInfo = document.querySelector('.popup_script_edit-info');
const popupCreateImage = document.querySelector('.popup_script_create-image');
const popupOpenImage = document.querySelector('.popup_script_open-image');

const formEditInfo = popupEditInfo.querySelector('.popup__form')
const formCreateImage = popupCreateImage.querySelector('.popup__form')

const inputEditInfoList = popupEditInfo.querySelectorAll('.popup__input');
const inputCreateImageList = popupCreateImage.querySelectorAll('.popup__input');

const popupCloseEditInfo = document.querySelector('.popup__close_scripy_edit-info');
const popupCloseCreateImage = document.querySelector('.popup__close_script_create-image');
const popupCloseOpenImage = document.querySelector('.popup__close_script_open-image');

const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');
const inputName = document.querySelector('.popup__input_script_name');
const inputJob = document.querySelector('.popup__input_script_job');

const elements = document.querySelector('.elements');
const cardsTemplate = document.querySelector('.element-template');

const nameImage = document.querySelector('.popup__input_script_image-name');
const urlImage = document.querySelector('.popup__input_script_image-url');

const popupImage = document.querySelector('.popup__image');
const popupImageName = document.querySelector('.popup__image-name');

const overlayPopupEditInfo = document.querySelector('.popup__overlay_script_edit-info');
const overlayPopupCreateImage = document.querySelector('.popup__overlay_script_create-image');
const overlayOpenImage = document.querySelector('.popup__overlay_script_open-image');

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

function openImage(evt) {
    const image = evt.target;
    popupImage.src = image.src;
    popupImage.alt = image.alt;
    popupImageName.textContent = image.alt;
    openPopup(popupOpenImage);
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

function renderList() {
    const listItem = initialCards.map(createImage);
    elements.append(...listItem);
};

renderList();

popupEditInfo.addEventListener('submit', formSubmitHandler);
popupCreateImage.addEventListener('submit', formSubmitHandlerAddImage);

openedPopup.addEventListener('click', openPopupInfo);

openedAddNewImagePopup.addEventListener('click', openPopupCreateImage)

overlayPopupEditInfo.addEventListener('click', closeEditInfoPopup);
overlayPopupCreateImage.addEventListener('click', closeCreateImagePopup);
overlayOpenImage.addEventListener('click', closeOpenImagePopup);

popupCloseEditInfo.addEventListener('click', closeEditInfoPopup);
popupCloseCreateImage.addEventListener('click', closeCreateImagePopup);
popupCloseOpenImage.addEventListener('click', closeOpenImagePopup);