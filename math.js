//Створіть функцію `getRandomInt`, яка приймає два цілих числа: `min` та `max`. Ця функція повинна генерувати випадкове ціле число в діапазоні від `min` до `max` (включно).
function getRandomInt() {
  let min = Number(prompt(`enter the min number`)); // number(prompt(`enter the min number`));
  let max = Number(prompt(`enter the max number`));
  console.log(min);
  console.log(max);
  if (min > max) {
    let temp = min;
    min = max;
    max = temp;
  }
  let x = Math.floor(Math.random() * 100 + 1);
  return `your random number in range from ${min} to ${max} is: ${Math.floor(
    Math.random() * (max - min + 1) + min
  )}`;
}
console.log(getRandomInt());

// Ваше завдання - створити функцію greet в JavaScript.
let name = prompt(`enter your name:`);
const greeting = 'Hello, ';
function greetByName(greeting, name) {
  return greeting + name;
}

console.log(greeting, name);

//Створіть функцію sumBigIntegers, яка приймає два рядки (numStr1 та numStr2), що представляють великі числа.
// Функція повинна перетворити ці рядки на BigInt і повернути їх суму.
let number1 = '9007199254740991';
let number2 = '9007199254740991';

function sumBigIntegers(number1, number2) {
  let resultNumber = BigInt(number1) + BigInt(number2);
  return resultNumber;
}

let result3 = sumBigIntegers(number1, number2);
console.log(result3);
