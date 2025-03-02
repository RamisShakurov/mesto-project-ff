import {addClass, closePopup, removeClass} from "./modal";
import {listOfCards} from "./index";


const  initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

const popupImage = document.querySelector('.popup_type_image')
const formElement = document.forms['new-place']
const placeName = formElement.elements['place-name']
const placeLink = formElement.elements['link']


function deleteCard(event) {
    event.target.closest('.card').remove()
}

function likeCard(event) {
    event.target.classList.toggle('card__like-button_is-active')
}

function handlerImageClick(event) {
    const popupCardImage = document.querySelector('.popup__image')
    addClass(popupImage)
    popupCardImage.src = event.target.src
    popupCardImage.alt = event.target.alt
    closePopup(popupImage)
}

function renderCard(link, name) {
    const template = document.querySelector('#card-template').content;
    const templateClone = template.querySelector('.card').cloneNode(true);
    const templateImage = templateClone.querySelector('.card__image');
    const templateTitle = templateClone.querySelector('.card__title');
    const buttonDelete = templateClone.querySelector('.card__delete-button');
    const buttonLike = templateClone.querySelector('.card__like-button')

    templateImage.src = link;
    templateImage.alt = name
    templateTitle.textContent = name;

    templateImage.addEventListener('click', handlerImageClick)
    buttonDelete.addEventListener('click', deleteCard)
    buttonLike.addEventListener('click', likeCard)

    return templateClone
}

function handleFormSubmit(event) {
    event.preventDefault()
    listOfCards.prepend(renderCard(placeLink.value, placeName.value))
    formElement.reset()
    removeClass(formElement.closest('.popup_type_new-card'))
}

formElement.addEventListener('submit', handleFormSubmit)

export {initialCards, renderCard}