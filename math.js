//Створіть функцію `getRandomInt`, яка приймає два цілих числа: `min` та `max`. Ця функція повинна генерувати випадкове ціле число в діапазоні від `min` до `max` (включно).
function getRandomInt(min, max) {
  return `your random number in range from ${min} to ${max} is: ${Math.floor(
    Math.random() * (max - min + 1) + min
  )}`;
}
console.log(getRandomInt(0, 1));
console.log(getRandomInt(1, 10));
console.log(getRandomInt(40, 50));
console.log(getRandomInt(1, 100));

// Ваше завдання - створити функцію greet в JavaScript.
function greetByName(msg, name) {
  return msg + ', ' + name;
}
console.log(greetByName('hi', 'testName'));
console.log(greetByName('hey', 'testName'));
console.log(greetByName('hello', 'testName'));

//Створіть функцію sumBigIntegers, яка приймає два рядки (numStr1 та numStr2), що представляють великі числа.
// Функція повинна перетворити ці рядки на BigInt і повернути їх суму.
let number1 = '9007199254740991';
let number2 = '9007199254740991';

function sumBigIntegers(numStr1, numStr2) {
  let resultNumber = BigInt(numStr1) + BigInt(numStr2);
  return resultNumber;
}

let result3 = sumBigIntegers(number1, number2);
console.log(result3);
