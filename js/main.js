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

const SIMILAR_POSTS_COUNT = 25;
const POSTID = [];
const COMMENTID = [];
const URL = [];

const createArray = (array) => array.splice(Math.random()*array.length, 1)[0];

//Хотелось бы сделать один счетчик вместо трех, обернув его в функцию, но не знаю,
//как передать массив в качестве аргумента, чтобы все работало.
for (let i = 1; i <= SIMILAR_POSTS_COUNT; i++) {
  POSTID.push(i);
}

for (let i = 1; i <= SIMILAR_POSTS_COUNT; i++) {
  COMMENTID.push(i);
}

for (let i = 1; i <= SIMILAR_POSTS_COUNT; i++) {
  URL.push(i);
}

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createComment = () => ({
  id: createArray(COMMENTID),
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const createPost = () => ({
  id: createArray(POSTID),
  url: `photos/${createArray(URL)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15, 200),
  comments: createComment(),
});

const similarPosts = Array.from({length: SIMILAR_POSTS_COUNT}, createPost);

console.log(similarPosts);
