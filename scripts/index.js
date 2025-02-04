'use strict';

const listOfCards = document.querySelector('.places__list');

function deleteCard(event) {
    event.target.closest(".card").remove()
}

function renderCard(link, name) {
    const template = document.querySelector('#card-template').content;
    const templateClone = template.querySelector('.card').cloneNode(true);
    const templateImage = templateClone.querySelector('.card__image');
    const templateTitle = templateClone.querySelector('.card__title');
    const buttonDelete = templateClone.querySelector('.card__delete-button');

    templateImage.src = link;
    templateImage.atl = name
    templateTitle.textContent = name;

    buttonDelete.addEventListener('click', deleteCard)
    
    return templateClone
}

initialCards.forEach(item =>{
    listOfCards.append(renderCard(item.link, item.name));
})