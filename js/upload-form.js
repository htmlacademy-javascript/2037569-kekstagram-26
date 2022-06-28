const uploadFile = document.querySelector('#upload-file');
const editPhoto = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');
const imgUploadForm = document.querySelector('.img-upload__form');
const inputHashtag = document.querySelector('.text__hashtags');
const inputDescription = document.querySelector('.text__description');

//Закрытие формы редактирования

uploadCancel.addEventListener('click', (evt) => {
  evt.preventDefault();
  hideEditPhoto();
});

const onEditClose = (evt) => {
  if (evt.key === 'Escape') {
    hideEditPhoto();
  }
};

function hideEditPhoto(){
  editPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEditClose);
  imgUploadForm.reset();
}

//Открытие формы редактирования

const uploadPhoto = () => {
  uploadFile.addEventListener('change', () => {
    editPhoto.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', onEditClose);
  });
};

//Убираем закрытие по Esc при фокусе
const isEscapeKey = (evt) => evt.key === 'Escape';

const onFocusInputPressEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

inputHashtag.addEventListener('keydown', onFocusInputPressEsc);
inputDescription.addEventListener('keydown', onFocusInputPressEsc);

export {uploadPhoto};
