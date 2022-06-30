const imgUploadForm = document.querySelector('.img-upload__form');
const inputHashtag = document.querySelector('.text__hashtags');

const MAX_HASHTAG_NUMBERS = 5;
const RE = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;


//Функции для проверки хештегов
const validateHashtags = (value) => {
  const hashTags = value.toLowerCase().trim().split(' ');
  return hashTags.every((hashTag) => RE.test(hashTag));
};

const validateUniqueHashtags = (value) => {
  const hashTags = value.toLowerCase().trim().split(' ');
  return hashTags.length === (new Set(hashTags)).size;
};

const validateNumberHashtags = (value) => {
  const hashTags = value.toLowerCase().trim().split(' ');
  return hashTags.length < MAX_HASHTAG_NUMBERS;
};

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__form',
  errorTextParent: 'img-upload__field-wrapper'
});


pristine.addValidator(inputHashtag, validateHashtags, 'Невалидный хештег');
pristine.addValidator(inputHashtag, validateUniqueHashtags, 'Один и тот же хештег не может быть использован дважды');
pristine.addValidator(inputHashtag, validateNumberHashtags, 'Нельзя указать больше 5 хештегов');

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  //if (pristine.validate());
});

