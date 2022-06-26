const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureComments = bigPicture.querySelector('.comments-count');
const bigPicttureDescription = bigPicture.querySelector('.social__caption');

const commentCount = bigPicture.querySelector('.social__comment-count');
const commentLoader = bigPicture.querySelector('.comments-loader');
const commentsContainer = bigPicture.querySelector('.social__comments');
const commentElement = document.querySelector('.social__comment');

const buttonCloseBigPicture = bigPicture.querySelector('#picture-cancel');

const body = document.querySelector('body');
const commentListFragment = document.createDocumentFragment();

buttonCloseBigPicture.addEventListener('click', (evt) => {
  evt.preventDefault();
  hideBigPicture();
});

const onModalClose = (evt) => {
  if (evt.key === 'Escape') {
    hideBigPicture();
  }
};

function hideBigPicture(){
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  //document.removeEventListener('keydown', onModalClose);
}

//Функция для отрисовки фотографии в полноэкранном режиме

const renderPhotoElement = (photo) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  commentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');

  bigPictureImg.src = photo.url;
  bigPictureLikes.textContent = photo.likes;
  bigPictureComments.textContent = photo.comments;
  bigPicttureDescription.textContent = photo.description;

  photo.comments.forEach((comment) => {
    const commentElementCopy = commentElement.cloneNode(true);
    const commentAvatar = commentElementCopy.querySelector('.social__comment .social__picture');
    const commentMesssage = commentElementCopy.querySelector('.social__comment .social__text');

    commentAvatar.src = comment.avatar;
    commentAvatar.alt = comment.name;
    commentMesssage.textContent = comment.message;

    commentListFragment.append(commentElementCopy);
  });

  commentsContainer.innerHTML = '';
  commentsContainer.append(commentListFragment);

  document.addEventListener('keydown', onModalClose);


};

export {renderPhotoElement};
