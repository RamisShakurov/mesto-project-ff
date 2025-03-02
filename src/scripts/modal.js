const formEditElement = document.forms['edit-profile']
const nameInput = formEditElement.elements.name
const jobInput = formEditElement.elements.description



function addClass(popup) {
    popup.classList.add('popup_is-opened')
}

function removeClass(popup) {
    popup.classList.remove('popup_is-opened')
}

function handleEscapeKey(event) {
    if (event.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        if (openedPopup) {
            removeClass(openedPopup);
        }
    }
}

function handleOverlayClick(event) {
    if (event.target.classList.contains('popup')) {
        removeClass(event.target);
    }
}

function handleFormSubmit(evt) {
    const profileTitle = document.querySelector('.profile__title')
    const profileDescription = document.querySelector('.profile__description')
    evt.preventDefault();
    profileTitle.textContent = nameInput.value
    profileDescription.textContent = jobInput.value
    formEditElement.reset()
    removeClass(formEditElement.closest('.popup_type_edit'))
}

function openPopup(popup) {
    popup.buttonToOpen.addEventListener('click', () => addClass(popup.popup))
}

function closePopup(popup) {
    document.addEventListener('keydown', handleEscapeKey)
    popup.popup.addEventListener('click', handleOverlayClick)

    const button = popup.popup.querySelector('.popup__close')
    button.addEventListener('click', () => removeClass(popup.popup))
}

export {openPopup, closePopup, addClass, removeClass, formEditElement, handleFormSubmit}