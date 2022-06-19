import {makePosts} from './data.js';

const userPhotoTemplate = document.querySelector('#picture').content;
const userPhotosContainer = document.querySelector('.pictures');
const photoListFragment = document.createDocumentFragment();
const userPhotos = makePosts();

userPhotos.forEach((photo) => {
  const photoProperty = userPhotoTemplate.cloneNode(true);
  photoProperty.querySelector('.picture__img').src = photo.url;
  photoProperty.querySelector('.picture__likes').textContent = photo.likes;
  photoProperty.querySelector('.picture__comments').textContent = photo.comments.length;
  photoListFragment.append(photoProperty);
});

userPhotosContainer.append(photoListFragment);
