let info = document.querySelector('.profile__info');
let openedPopup = document.querySelector('.profile__edit-button');
let input = document.querySelector('.popup');
let closedPopup = document.querySelector('.popup__close');
let savePopup = document.querySelector('.popup__button')
let form = document.querySelector('.popup__container');

let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');
let inputName = document.querySelector('.popup__text_script_name');
let inputJob = document.querySelector('.popup__text_script_job');

function openPopup() {
    input.classList.add('popup_opened');
    inputName.value = name.textContent;
    inputJob.value = job.textContent;
}

function closePopup() {
    input.classList.remove('popup_opened');
}

function formSubmitHandler(event) {
    event.preventDefault();
    name.textContent = inputName.value;
    job.textContent = inputJob.value;
    closePopup()
}

input.addEventListener('submit', formSubmitHandler);

openedPopup.addEventListener('click', openPopup);

closedPopup.addEventListener('click', closePopup);