import './data.js';
import './util.js';
import {renderThumbnails} from './thumbnail.js';
import {makePosts} from './data.js';

renderThumbnails(makePosts());
