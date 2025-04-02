function renderCard(cardData, handleDeleteConfirm, onLikeCard, onOpenImagePopup, dataProfile) {
    const template = document.querySelector('#card-template').content;
    const templateClone = template.querySelector('.card').cloneNode(true);
    const templateImage = templateClone.querySelector('.card__image');
    const templateTitle = templateClone.querySelector('.card__title');
    const buttonDelete = templateClone.querySelector('.card__delete-button');
    const buttonLike = templateClone.querySelector('.card__like-button')
    const currentCountLike = templateClone.querySelector('.card__like-counter')

    cardData.likes.forEach(like => {
        if (like['_id'] === dataProfile) {
            buttonLike.classList.add('card__like-button_is-active')
        }
    });

    currentCountLike.textContent = cardData.likes.length

    if (dataProfile !== cardData['owner']['_id']) {
        buttonDelete.classList.add('card__delete-button_hidden')
    }

    templateImage.src = cardData.link;
    templateImage.alt = cardData.name
    templateTitle.textContent = cardData.name;

    templateImage.addEventListener('click', () => onOpenImagePopup(event))
    buttonDelete.addEventListener('click', () => {
        handleDeleteConfirm(cardData['_id'], templateClone)
    })
    buttonLike.addEventListener('click', () => {
        const likeStatus = !buttonLike.classList.contains('card__like-button_is-active')
        onLikeCard(cardData['_id'], likeStatus, buttonLike, currentCountLike)
    })

    return templateClone
}

export {renderCard}