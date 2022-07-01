import './util.js';
import './big-photo.js';
import './validation.js';
import './photo-effects.js';
import './scale.js';
import {renderThumbnails} from './thumbnail.js';
import {makePosts} from './data.js';
import {uploadPhoto} from './upload-form.js';


renderThumbnails(makePosts());
uploadPhoto();
