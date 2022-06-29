const MIN_COMMENTS_COUNT = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureComments = bigPicture.querySelector('.comments-count');
const bigPictureDescription = bigPicture.querySelector('.social__caption');

const commentCount = bigPicture.querySelector('.social__comment-count');
const commentLoader = bigPicture.querySelector('.comments-loader');
const commentsContainer = bigPicture.querySelector('.social__comments');
const commentElement = bigPicture.querySelector('.social__comment');

const buttonCloseBigPicture = bigPicture.querySelector('#picture-cancel');

const body = document.querySelector('body');
const commentListFragment = document.createDocumentFragment();

buttonCloseBigPicture.addEventListener('click', (evt) => {
  evt.preventDefault();
  onBigPictureKeyDown();
});

const onModalClose = (evt) => {
  if (evt.key === 'Escape') {
    onBigPictureKeyDown();
  }
};

function onBigPictureKeyDown(){
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalClose);
}

//Функция для отрисовки фотографии в полноэкранном режиме

const renderPhotoElement = (photo) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  bigPictureImg.src = photo.url;
  bigPictureLikes.textContent = photo.likes;
  bigPictureComments.textContent = photo.comments;
  bigPictureDescription.textContent = photo.description;

  let countClickAddComments = 0;
  commentsContainer.textContent = '';
  const commentsCount = photo.comments.length;
  const commentsPartsCount = Math.floor(commentsCount / MIN_COMMENTS_COUNT) + Math.ceil(commentsCount % MIN_COMMENTS_COUNT / MIN_COMMENTS_COUNT);

  if (MIN_COMMENTS_COUNT >= commentsCount) {
    commentLoader.classList.add('hidden');
  }
  else {
    commentLoader.classList.remove('hidden');
  }

  const addCommentsToList = () => {
    photo.comments.slice(countClickAddComments * MIN_COMMENTS_COUNT, (countClickAddComments + 1) * MIN_COMMENTS_COUNT).forEach((comment) => {
      const commentElementCopy = commentElement.cloneNode(true);
      const commentAvatar = commentElementCopy.querySelector('.social__comment .social__picture');
      const commentMesssage = commentElementCopy.querySelector('.social__comment .social__text');

      commentAvatar.src = comment.avatar;
      commentAvatar.alt = comment.name;
      commentMesssage.textContent = comment.message;

      commentListFragment.append(commentElementCopy);
    });
    commentsContainer.append(commentListFragment);
    const shownComments = (countClickAddComments + 1) * MIN_COMMENTS_COUNT <= commentsCount ? (countClickAddComments + 1) * MIN_COMMENTS_COUNT : commentsCount;
    commentCount.textContent = `${shownComments} из ${commentsCount} комментариев`;
  };
  addCommentsToList();

  commentLoader.addEventListener('click', () => {
    countClickAddComments++;
    if (countClickAddComments === commentsPartsCount - 1) {
      commentLoader.classList.add('hidden');
      addCommentsToList();
    }
    else {
      addCommentsToList();
    }
  });

  commentsContainer.append(commentListFragment);

  document.addEventListener('keydown', onModalClose);
};


export {renderPhotoElement};
