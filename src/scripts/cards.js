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

function deleteCard(event) {
    event.target.closest('.card').remove()
}

function likeCard(event) {
    event.target.classList.toggle('card__like-button_is-active')
}

function renderCard(cardData, onDeleteCard, onLikeCard, onOpenImagePopup ) {
    const template = document.querySelector('#card-template').content;
    const templateClone = template.querySelector('.card').cloneNode(true);
    const templateImage = templateClone.querySelector('.card__image');
    const templateTitle = templateClone.querySelector('.card__title');
    const buttonDelete = templateClone.querySelector('.card__delete-button');
    const buttonLike = templateClone.querySelector('.card__like-button')

    templateImage.src = cardData.link;
    templateImage.alt = cardData.name
    templateTitle.textContent = cardData.name;

    templateImage.addEventListener('click', () => onOpenImagePopup(event))
    buttonDelete.addEventListener('click', () => onDeleteCard(event))
    buttonLike.addEventListener('click', () => onLikeCard(event))

    return templateClone
}

export {initialCards, renderCard, deleteCard, likeCard}