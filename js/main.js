//Функция возвращает случайное целое число из переданного диапазона включительно

function getRandomNumber (min, max) {
  if (min >= 0 && max > min) {
    return Math.floor(Math.random() * (max - min) + min);
  } else if (min >= 0 && min === max) {
    return Math.floor(min);
  } else if (max >= 0 && min > max) {
    return Math.floor(Math.random() * (min - max) + max);
  }
  throw new Error ('Диапазон указан неверно. Числа должны быть больше или равны нулю, а первое число - меньше второго.');
}

getRandomNumber (10, 15);

//Функция проверки максимальной длины строки

function checkLength (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
}

checkLength ('Пример строки', 15);
