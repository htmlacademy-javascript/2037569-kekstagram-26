const uploadFile = document.querySelector('#upload-file');
const editPhoto = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');
const scaleControl = document.querySelector('.scale__control');
const hashtags = document.querySelector('.text__hashtags');
const descriptionTextarea = document.querySelector('.text__description');
const photoFilter = document.querySelector('.effects__radio');

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
  //Сброс значений полей
  uploadFile.value = '';
  scaleControl.value = '100%';
  hashtags.value = '';
  photoFilter.value = 'none';
  descriptionTextarea.textContent = '';
}

//Открытие формы редактирования

const uploadPhoto = () => {
  uploadFile.addEventListener('change', () => {
    editPhoto.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', onEditClose);
  });
};

export {uploadPhoto};
