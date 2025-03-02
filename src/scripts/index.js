'use strict';
import {handleFormSubmitNewCard, initialCards, renderCard, formElement} from "./cards";
import {openPopup, closePopup, formEditElement, handleFormSubmit} from "./modal";

export const listOfCards = document.querySelector('.places__list');

const popupEdit = {
    popup: document.querySelector('.popup_type_edit'),
    buttonToOpen: document.querySelector('.profile__edit-button'),
}

const popupCreateCard = {
    popup: document.querySelector('.popup_type_new-card'),
    buttonToOpen: document.querySelector('.profile__add-button'),
}

initialCards.forEach(item =>{
    listOfCards.append(renderCard(item.link, item.name));
})

openPopup(popupEdit)
closePopup(popupEdit)

openPopup(popupCreateCard)
closePopup(popupCreateCard)

formElement.addEventListener('submit', handleFormSubmitNewCard)
formEditElement.addEventListener('submit', handleFormSubmit)
