import {showAlert} from './upload-data.js';

const Servers = {
  GET: 'https://26.javascript.pages.academy/kekstagram/data',
  SEND: 'https://26.javascript.pages.academy/kekstagram'
};

// Отправляем запрос на сервер
const getData = (onSuccess) => {
  fetch(Servers.GET)
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      showAlert('Не удалось получить изображения. Обновите страницу');
    });
};

// Отправляем данные на сервер
const sendData = (onSuccess, onFail, body) => {
  fetch(
    Servers.SEND,
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess(true);
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
