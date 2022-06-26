import './util.js';
import './big-photo.js';
import {renderThumbnails} from './thumbnail.js';
import {makePosts} from './data.js';

renderThumbnails(makePosts());

