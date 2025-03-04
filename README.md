# Проектная работа Mesto
https://github.com/RamisShakurov/mesto-project-ff

## 6 Спринт
### Исправления №1
#### card.js:
1. Удален импорт listOfCards
2. Функция handleFormSubmitNewCard перенесена в index.js
3. Переменная formElement переименована на formNewPlace. Переменная перенесена в index.js
4. placeName, placeLink переименованы и перенесены в index.js
5. переменная popupImage переименована и объявлена в index.js
6. Функция handlerImageClick перенесена в index.js
7. Переменная popupCardImage объявлена в глобальной области видимости в index.js
8. Функция закрытия попапа удалена из handlerImageClick
9. Функция createCard переделана 
10. Функция handleFormSubmitNewCard перенесена в index.js


#### modal.js:
1. Переменные formEditElement, nameInput, jobInput вынесены в index.js
2. Функция handleFormSubmit вынесена в index.js
3. Переменные объявлены вначале файлаprofileTitle, profileDescription
4. Функция openPopup переименована на setOpenPopupListener
5. Функция closePopup переименована на setClosePopupListener
6. Функция addClass переименована на OpenPopup
7. Функция removeClass переименована на ClosePopup. В функцию добавлено снятие слушателя
8. Слушатель нажатия esc удаляется при закрытии попапа. 


## 5 Спринт
### Исправления №1:
1. Исправлена функция удаления карточки. Теперь код не зависит от parentElement.
2. Из шаблона теперь извлекается сам элемент, а не элемент фрагмент родитель.
3. Переменная listOfCards теперь глобальная.
4. Для изображения добавлен атрибут alt.
5. Функция создания карточки, только возвращает карточку.
6. Перебор массива осуществляется через .forEach.
7. Функция удаления карточки передается непосредственно в тело функции(не через параметр).
8. Из кода удалены не комментарии.