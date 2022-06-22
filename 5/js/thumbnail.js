//

const renderThumbnails = (thumbnails) => {
  const userPhotoTemplate = document.querySelector('#picture').content;
  const userPhotosContainer = document.querySelector('.pictures');
  const photoListFragment = document.createDocumentFragment();

  thumbnails.forEach(({url, likes, comments}) => {
    const photoProperty = userPhotoTemplate.cloneNode(true);
    photoProperty.querySelector('.picture__img').src = url;
    photoProperty.querySelector('.picture__likes').textContent = likes;
    photoProperty.querySelector('.picture__comments').textContent = comments.length;
    photoListFragment.append(photoProperty);
  });

  userPhotosContainer.append(photoListFragment);
};

export {renderThumbnails};

//const userPhotos = makePosts();


