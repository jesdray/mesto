let info = document.querySelector('.profile__info');
let openedPopup = document.querySelector('.profile__edit-button');
let input = document.querySelector('.popup');
let closedPopup = document.querySelector('.popup__close');
let savePopup = document.querySelector('.popup__button')
let form = document.querySelector('.popup__container');

let name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');
let inputName = document.querySelector('.popup__name');
let inputJob = document.querySelector('.popup__job');

function openPopup() {
    input.classList.add('popup__opened');
    inputName.setAttribute('value', name.textContent);
    inputJob.setAttribute('value', job.textContent);
    document.body.style.overflowY = 'hidden';
}

function closePopup() {
    input.classList.remove('popup__opened');
    document.body.style.overflowY = '';
   if (inputName.value !== name.textContent || inputJob.value !== job.textContent) {
        inputName.value = name.textContent;
        inputJob.value = job.textContent;
   }
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