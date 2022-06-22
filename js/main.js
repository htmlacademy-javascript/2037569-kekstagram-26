import './util.js';
import './big-foto.js';
import {renderThumbnails} from './thumbnail.js';
import {makePosts} from './data.js';

renderThumbnails(makePosts());

