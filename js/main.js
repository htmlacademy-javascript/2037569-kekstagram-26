//Функция возвращает случайное целое число из переданного диапазона включительно

const getRandomNumber = (min, max) => {
  if (min >= 0 && max > min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  } if (min >= 0 && min === max) {
    return Math.floor(min);
  } if (max >= 0 && min > max) {
    return Math.floor(Math.random() * (min - max + 1) + max);
  }
  return 0;
};

getRandomNumber (10, 15);

//Функция проверки максимальной длины строки

const checkLength = (string, maxLength) => string.length <= maxLength;

checkLength ('Пример строки', 15);
