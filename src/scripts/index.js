'use strict';
import {renderCard} from './card'
import {closePopup, openPopup, setClosePopupListener, setOpenPopupListener} from "./modal";
import {clearValidation, enableValidation} from "./validation";
import {addNewCard, changeLogo, deleteCard, editProfile, getInitialCards, getProfileInfo, toggleLike} from "./api";

const formEditElement = document.forms['edit-profile']
const nameInput = formEditElement.elements.name
const jobInput = formEditElement.elements.description
const profileTitle = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')

const formNewPlace = document.forms['new-place']
const inputNameFormAddNewCard = formNewPlace.elements['place-name']
const inputLinkFormAddNewCard = formNewPlace.elements['link']

const formNewLogo = document.forms['new-logo']
const inputLogo = formNewLogo.elements['logo-input']
const logoImage = document.querySelector('.profile__image')

const formConfirm = document.forms['confirm']


const listOfCards = document.querySelector('.places__list');

const popupEdit = {
    popup: document.querySelector('.popup_type_edit'),
    buttonToOpen: document.querySelector('.profile__edit-button'),
}
//
const popupCreateCard = {
    popup: document.querySelector('.popup_type_new-card'),
    buttonToOpen: document.querySelector('.profile__add-button'),
}

const popupChangeLogo = {
    popup: document.querySelector('.popup_type_new_logo'),
    buttonToOpen: document.querySelector('.profile__image')
}

const popupConfirmDelete = {
    popup: document.querySelector('.popup_type_confirm')
}

const popupOpenImage = {popup: document.querySelector('.popup_type_image')}

const popupCardImage = document.querySelector('.popup__image')
const popupCaption = document.querySelector('.popup__caption')

const configValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible'
}

const cardToDelete = {
    idCard: '',
    elementCard: null
}

function loader(loadingStatus, button, textLoading = 'Сохранение...', afterLoadingText = 'Сохранить') {
    button.textContent = loadingStatus ? textLoading : afterLoadingText
}

function handlerImageClick(event) {
    openPopup(popupOpenImage.popup)
    popupCardImage.src = event.target.src
    popupCardImage.alt = event.target.alt
    popupCaption.textContent = event.target.alt
}

function handleFormEditSubmit(evt) {
    const newData = {
        name: nameInput.value,
        about: jobInput.value
    }
    evt.preventDefault();
    loader(true, evt.submitter)
    editProfile(newData).then(currentData => {
        profileTitle.textContent = currentData.name
        profileDescription.textContent = currentData.about

    }).catch(err => `Error: ${err}`)
        .finally(() => loader(false, evt.submitter))
    formEditElement.reset()
    closePopup(popupEdit.popup)
}

function handleFormSubmitNewCard(event) {
    const newCardData = {
        name: inputNameFormAddNewCard.value,
        link: inputLinkFormAddNewCard.value
    }
    event.preventDefault()
    loader(true, event.submitter)
    addNewCard(newCardData).then(res => {
        listOfCards.prepend(renderCard(res, handleDeleteConfirm, toggleLike, handlerImageClick, res.owner._id))
    }).catch(err => `Error: ${err}`)
        .finally(() => loader(false, event.submitter))
    formNewPlace.reset()
    closePopup(formNewPlace.closest('.popup_type_new-card'))
}

function handleFormSubmitNewLogo(event) {
    event.preventDefault()
    loader(true, event.submitter)
    changeLogo(inputLogo.value).then(newLogo => {
        logoImage.style.backgroundImage = `url(${newLogo.avatar})`
    }).catch(err => `Error: ${err}`)
        .finally(() => loader(false, event.submitter))
    formEditElement.reset()
    closePopup(popupChangeLogo.popup)
}

function openPopupProfile() {
    getProfileInfo().then(data => {
        jobInput.value = data.about
        nameInput.value = data.name
    }).catch(err => `Error: ${err}`)
    openPopup(popupEdit.popup)
}

function openCreateProfile() {
    inputNameFormAddNewCard.value = ''
    inputLinkFormAddNewCard.value = ''

    openPopup(popupCreateCard.popup)
}

function handleDeleteConfirm(cardId, cardElement) {
    cardToDelete.idCard = cardId
    cardToDelete.elementCard = cardElement
    openPopup(popupConfirmDelete.popup)
}

function handleFormDeleteConfirm(evt) {
    evt.preventDefault()
    loader(true, evt.submitter, 'Удаление...', 'Да')
    deleteCard(cardToDelete.idCard).then(() => {
        cardToDelete.elementCard.remove()
        closePopup(popupConfirmDelete.popup)
    }).catch(err => `Error: ${err}`)
        .finally(() => loader(false, evt.submitter, 'Удаление...', 'Да'))

}

popupEdit.buttonToOpen.addEventListener('click', openPopupProfile)
popupCreateCard.buttonToOpen.addEventListener('click', openCreateProfile)


setOpenPopupListener(popupEdit, clearValidation, configValidation)
setClosePopupListener(popupEdit)

setOpenPopupListener(popupCreateCard, clearValidation, configValidation)
setClosePopupListener(popupCreateCard)

setClosePopupListener(popupOpenImage)

setOpenPopupListener(popupChangeLogo, clearValidation, configValidation)
setClosePopupListener(popupChangeLogo)

setClosePopupListener(popupConfirmDelete)


formNewPlace.addEventListener('submit', handleFormSubmitNewCard)
formEditElement.addEventListener('submit', handleFormEditSubmit)
formNewLogo.addEventListener('submit', handleFormSubmitNewLogo)
formConfirm.addEventListener('submit', handleFormDeleteConfirm)

enableValidation(configValidation)

Promise.all([getProfileInfo(), getInitialCards()])
    .then(([dataProfile, cards]) => {

            profileTitle.textContent = dataProfile.name
            profileDescription.textContent = dataProfile.about
            logoImage.style.backgroundImage = `url(${dataProfile.avatar})`
            cards.forEach(cardData => {
                listOfCards.append(renderCard(cardData, handleDeleteConfirm, toggleLike, handlerImageClick, dataProfile._id));
            })
        }
    ).catch(err => `Error: ${err}`)
