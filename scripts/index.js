'use strict';
// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу


function renderCard(link, name) {
    const template = document.querySelector('#card-template').content;
    const templateClone = template.cloneNode(true);
    const templateImage = templateClone.querySelector('.card__image');
    const templateTitle = templateClone.querySelector('.card__title');
    const listOfCards = document.querySelector('.places__list');
    const buttonDelete = templateClone.querySelector('.card__delete-button');

    templateImage.src = link;
    templateTitle.textContent = name;
    listOfCards.append(templateClone);

    buttonDelete.addEventListener('click', evt => {
        evt.target.closest(".card__delete-button").parentElement.remove();
    });

}

for (const i of initialCards) {
    renderCard(i.link, i.name);
}
