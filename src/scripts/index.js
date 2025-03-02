'use strict';
import {initialCards, renderCard} from "./cards";
import {openPopup, closePopup} from "./modal";


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

openPopup(popupEdit.buttonToOpen, popupEdit.popup)
closePopup(popupEdit.popup)


openPopup(popupCreateCard.buttonToOpen, popupCreateCard.popup)
closePopup(popupCreateCard.popup)