import {removeClass} from "./modal";


const formElement = document.forms['edit-profile']
const nameInput = formElement.elements.name
const jobInput = formElement.elements.description

function handleFormSubmit(evt) {
    const profileTitle = document.querySelector('.profile__title')
    const profileDescription = document.querySelector('.profile__description')
    evt.preventDefault();
    profileTitle.textContent = nameInput.value
    profileDescription.textContent = jobInput.value
    formElement.reset()
    removeClass(formElement.closest('.popup_type_edit'))
}

formElement.addEventListener('submit', handleFormSubmit);



