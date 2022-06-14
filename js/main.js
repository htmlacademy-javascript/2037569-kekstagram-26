//Функция проверки максимальной длины строки

const checkLength = (string, maxLength) => string.length <= maxLength;

checkLength ('Пример строки', 15);

//ДОМАШНЕЕ ЗАДАНИЕ
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Иван',
  'Хуан',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const DESCRIPTIONS = [
  'Это я на море был, а сейчас дома уже',
  'Вечер перестаёт быть томным',
  'Когда уже отпуск?'
];

const Avatar = {
  MIN: 1,
  MAX: 6
};

const Likes = {
  MIN: 15,
  MAX: 200
};

const Comments = {
  MIN: 1,
  MAX: 3
};

const SIMILAR_POSTS_COUNT = 25;

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

let commentCount = 0;

const createComment = () => {
  commentCount++;
  return {
    id: commentCount,
    avatar: `img/avatar-${getRandomPositiveInteger(Avatar.MIN, Avatar.MAX)}.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES),
  };
};

let postCount = 0;

const createPost = () => {
  while (postCount <= SIMILAR_POSTS_COUNT) {
    postCount++;
    return {
      id: postCount,
      url: `photos/${postCount}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomPositiveInteger(Likes.MIN, Likes.MAX),
      comments: Array.from({length: getRandomPositiveInteger(Comments.MIN, Comments.MAX)}, createComment)
    };
  }
};

const similarPosts = Array.from({length: SIMILAR_POSTS_COUNT}, createPost);

console.log(similarPosts);
