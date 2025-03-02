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

function openPopup(buttonOpen, popup) {
    buttonOpen.addEventListener('click', () => addClass(popup))
}

function closePopup(popup) {
    document.addEventListener('keydown', handleEscapeKey)
    popup.addEventListener('click', handleOverlayClick)

    const button = popup.querySelector('.popup__close')
    button.addEventListener('click', () => removeClass(popup))
}

export {openPopup, closePopup, addClass, removeClass}