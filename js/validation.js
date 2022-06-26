const inputHashtag = document.querySelector('.text__hashtags');
const inputDescription = document.querySelector('.text__description');
const templateHashtagCommon = /(^#[A-Za-zА-ЯЁа-яё0-9]{0,}$)s*/;

const MAX_LENGHT_HASHTAG = 20;
const MAX_HASHTAG_NUMBERS = 5;
const MAX_LENGTH_TEXT_DESCRIPTION = 140;

const onHashTagInputValid = () => {
  const currentValue = inputHashtag.value;
  const arrayHashtags = currentValue.toLowerCase().split(' ');
  const uniqueHashtagArray = new Set(arrayHashtags);

  arrayHashtags.forEach((hashtag) => {
    if (hashtag[0] !== '#') {
      inputHashtag.setCustomValidity('Хештег должен начинаться с символа #');
    } else if (hashtag === '#') {
      inputHashtag.setCustomValidity('Хештег не может состоять только символа #');
    } else if (!templateHashtagCommon.test(hashtag)) {
      inputHashtag.setCustomValidity('Удалите спецсимволы. После решетки должны быть только буквы и цифры');
    } else if (hashtag.length > MAX_LENGHT_HASHTAG) {
      inputHashtag.setCustomValidity('Максимальная длина одного хештега 20 символов, включая решётку.');
    } else if (arrayHashtags.length > MAX_HASHTAG_NUMBERS) {
      inputHashtag.setCustomValidity('Нельзя указать больше пяти хештегов]');
    } else if (arrayHashtags.length !== uniqueHashtagArray.size) {
      inputHashtag.setCustomValidity('Хештеги не должны повторяться');
    } else {
      inputHashtag.setCustomValidity('');
    }

    inputHashtag.reportValidity();
  });
};

// Обработчик поля ввода хештегов
inputHashtag.addEventListener('input', onHashTagInputValid);

// Функция проверки длины описания
const onInputDescriptionValid = () => {
  const currentLengthComment = inputDescription.value.length;

  if (currentLengthComment > MAX_LENGTH_TEXT_DESCRIPTION) {
    inputDescription.setCustomValidity('Длина описания не может составлять больше 140 символов. Удалите лишние символы.');
  } else {
    inputDescription.setCustomValidity('');
  }

  inputDescription.reportValidity();
};

inputDescription.addEventListener('input', onInputDescriptionValid);

//Убираем закрытие по Esc при фокусе
const isEscapeKey = (evt) => evt.key === 'Escape';

const stopPropagationKeydownEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

inputHashtag.addEventListener('keydown', stopPropagationKeydownEsc);
inputDescription.addEventListener('keydown', stopPropagationKeydownEsc);
