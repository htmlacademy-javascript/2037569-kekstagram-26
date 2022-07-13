import {renderThumbnails} from './thumbnail.js';
import {debounce} from './util.js';

const RERENDER_DELAY = 500;
const POSTS_FILTER_NUMBER = 10;
const SHUFFLE_CONST = 0.5;

const imgFilters = document.querySelector('.img-filters');
const filterBtnDefault = document.querySelector('#filter-default');
const filterBtnRandom = document.querySelector('#filter-random');
const filterBtnDiscussed = document.querySelector('#filter-discussed');

//Добавляем класс активной кнопке
const setActiveBtn = (activeBtn) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  activeBtn.classList.add('img-filters__button--active');
};

//Убираем отрисованные ранее фотографии
const clearPosts = () => {
  const postsList = document.querySelectorAll('.picture');
  postsList.forEach((picture) => {
    picture.remove();
  });
};

//Создаем массив фотографий
let cards = [];

const initPosts = (newCards) => {
  cards = newCards;
};

const getPosts = () => cards;

//Функция для показа фото по умолчанию
const getDefaultPosts = () => getPosts().sort((post1, post2) => post1.id - post2.id);

//Функция для показа рандомных фото
const getShuflePosts = () => getPosts().sort(() => SHUFFLE_CONST - Math.random()).slice(0, POSTS_FILTER_NUMBER);

//Функция для сортировки по количеству комментариев
const getDiscussedPosts = () => getPosts().sort((post1, post2) => post2.comments.length - post1.comments.length);

//Обновляем фотографии на странице
const updatePosts = (posts) => {
  clearPosts();
  renderThumbnails(posts);
};

//Убираем дребезг при переключении фильтров
const debouncedPosts = debounce(updatePosts, RERENDER_DELAY);

const initFilters = () => {
  imgFilters.classList.remove('img-filters--inactive');
  filterBtnDefault.addEventListener('click',(evt) => {
    setActiveBtn(evt.target);
    debouncedPosts(getDefaultPosts());
  });
  filterBtnRandom.addEventListener('click',(evt) => {
    setActiveBtn(evt.target);
    debouncedPosts(getShuflePosts());
  });
  filterBtnDiscussed.addEventListener('click', (evt) => {
    setActiveBtn(evt.target);
    debouncedPosts(getDiscussedPosts());
  });
};

export{initFilters, initPosts};
