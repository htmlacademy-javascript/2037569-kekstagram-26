import './util.js';
import './big-photo.js';
import './validation.js';
import './photo-effects.js';
import './scale.js';
import {renderThumbnails} from './thumbnail.js';
import {uploadPhoto, hideEditPhoto} from './upload-form.js';
import {getData} from './api.js';
import {setUserFormSubmit} from './validation.js';
import './upload-data.js';

getData(renderThumbnails);
uploadPhoto();
setUserFormSubmit(hideEditPhoto);


