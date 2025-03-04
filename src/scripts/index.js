'use strict';
import {initialCards, renderCard, deleteCard, likeCard} from "./cards";
import {setOpenPopupListener, setClosePopupListener, closePopup, openPopup} from "./modal";

const formEditElement = document.forms['edit-profile']
const nameInput = formEditElement.elements.name
const jobInput = formEditElement.elements.description
const profileTitle = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')

const formNewPlace = document.forms['new-place']
const inputNameFormAddNewCard = formNewPlace.elements['place-name']
const inputLinkFormAddNewCard = formNewPlace.elements['link']

const listOfCards = document.querySelector('.places__list');

const popupEdit = {
    popup: document.querySelector('.popup_type_edit'),
    buttonToOpen: document.querySelector('.profile__edit-button'),
}

const popupCreateCard = {
    popup: document.querySelector('.popup_type_new-card'),
    buttonToOpen: document.querySelector('.profile__add-button'),
}

const popupOpenImage = {popup: document.querySelector('.popup_type_image')}

const popupCardImage = document.querySelector('.popup__image')
const popupCaption = document.querySelector('.popup__caption')

function handlerImageClick(event) {
    openPopup(popupOpenImage.popup)
    popupCardImage.src = event.target.src
    popupCardImage.alt = event.target.alt
    popupCaption.textContent = event.target.alt
}

function handleFormEditSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value
    profileDescription.textContent = jobInput.value
    formEditElement.reset()
    closePopup(popupEdit.popup)
}

function handleFormSubmitNewCard(event) {
    const newCardData = {
        name: inputNameFormAddNewCard.value,
        link: inputLinkFormAddNewCard.value
    }
    event.preventDefault()
    listOfCards.prepend(renderCard(newCardData ,deleteCard, likeCard, handlerImageClick))
    formNewPlace.reset()
    closePopup(formNewPlace.closest('.popup_type_new-card'))
}

initialCards.forEach(cardData =>{
    listOfCards.append(renderCard(cardData, deleteCard, likeCard, handlerImageClick));
})

setOpenPopupListener(popupEdit)
setClosePopupListener(popupEdit)

setOpenPopupListener(popupCreateCard)
setClosePopupListener(popupCreateCard)

setClosePopupListener(popupOpenImage)

formNewPlace.addEventListener('submit', handleFormSubmitNewCard)
formEditElement.addEventListener('submit', handleFormEditSubmit)
