// Токен: 5d2138a4-35cc-4b27-8b79-e9377feb62b8
// // Идентификатор группы: wff-cohort-35
const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-35',
    headers: {
        authorization: '5d2138a4-35cc-4b27-8b79-e9377feb62b8',
        'Content-Type': 'application/json'
    }
}

const responseStatus = (res) => {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
}

const getProfileInfo = () => fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
}).then(res => responseStatus(res))

const getInitialCards = () => fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
}).then(res => responseStatus(res))

const editProfile = (newData) => fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
        name: newData.name,
        about: newData.about
    })
}).then(res => responseStatus(res))


const addNewCard = (newCard) => fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify(newCard)
    }
).then(res => responseStatus(res))

const deleteCard = (cardId) => fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    }
).then(res => responseStatus(res))

const toggleLike = (cardId, likeStatus) =>  fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: likeStatus ? 'PUT' : 'DELETE',
        headers: config.headers
    }
).then(res => responseStatus(res))


const changeLogo = (logo) => fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
        avatar: logo,
    })
}).then(res => responseStatus(res))




export {getProfileInfo, getInitialCards, editProfile, addNewCard, deleteCard, toggleLike, changeLogo}