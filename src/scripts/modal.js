function openPopup(popup) {
    popup.classList.add('popup_is-opened')
    document.addEventListener('keydown', handleEscapeKey)
}

function closePopup(popup) {
    popup.classList.remove('popup_is-opened')
    document.removeEventListener('keydown', handleEscapeKey)

}

function handleEscapeKey(event) {
    if (event.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        if (openedPopup) {
            closePopup(openedPopup);
        }
    }
}

function handleOverlayClick(event) {
    if (event.target.classList.contains('popup')) {
        closePopup(event.target);
    }
}

function setOpenPopupListener(popup) {
    popup.buttonToOpen.addEventListener('click', () => openPopup(popup.popup))
}

function setClosePopupListener(popup) {

    popup.popup.addEventListener('click', handleOverlayClick)
    const button = popup.popup.querySelector('.popup__close')
    button.addEventListener('click', () => closePopup(popup.popup))

}

export {setOpenPopupListener, setClosePopupListener, openPopup, closePopup}
