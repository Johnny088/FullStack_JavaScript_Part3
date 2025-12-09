//1. Порахувати кількість додатних чисел у масиві.
//Дано масив:
// [3, -1, 0, 5, 7, -4]
const arr1 = [3, -1, 0, 5, 7, -4];
let counterPositive = 0;
for (let i = 0; i < arr1.length; i += 1) {
  if (arr1[i] > 0) {
    counterPositive += 1;
  }
}
console.log(`positive numbers: ${counterPositive}`);

//2. Створити новий масив тільки з парних чисел.
//Дано масив:
//[1, 4, 7, 10, 13, 16]
const arr2 = [1, 4, 7, 10, 13, 16];
const evenArr = [];

for (let i = 0; i < arr2.length; i += 1) {
  if (arr2[i] % 2 == 0) {
    evenArr.push(arr2[i]);
  }
}
console.log(`even array numbers:  ${evenArr}`);

//3. Замінити всі від’ємні числа на 0.
//Дано масив:
//[5, -3, 2, -8, 0]
let arr3 = [5, -3, 2, -8, 0];
for (let i = 0; i < arr3.length; i += 1) {
  if (arr3[i] < 0) {
    arr3[i] = 0;
  }
}

console.log(`task3: ${arr3}`);

//4. Перевірити, чи містить масив певний елемент.
//Дано масив:
//["red", "green", "blue"]
//Та значення: "green"
//Перевірте, чи міститься це значення в масиві. Виведіть "Знайдено" або "Не знайдено".
const string4 = ['red', 'green', 'blue'];
if (string4.includes('green')) {
  console.log(`task4 ==> True`);
} else {
  console.log(`task4 ==> False`);
}

//5. Видалити перший нуль у масиві.
//Дано масив:
//[4, 0, 5, 0, 2]
let arr5 = [4, 0, 5, 0, 2];
const index = arr5.indexOf(0);
if (index != -1) {
  arr5.splice(index, 1);
}
console.log(`task5 ==> ${arr5}`);

//6. Перетворити масив слів у рядок через кому.
//Дано масив:
//["apple", "banana", "pear"]
//Створіть рядок "apple, banana, pear" використовуючи цикл.
const string6 = ['apple', 'banana', 'pear'];
let temp6 = '';
for (let i = 0; i < string6.length; i += 1) {
  temp6 += string6[i];
  if (i < string6.length - 1) {
    temp6 += ', ';
  }
}
console.log(temp6);

// const temp6 = string6.join(', ');
// console.log(`task6 ==> ${temp6}`);

//7. Знайти мінімальне число в масиві.
//Дано масив:
//[9, 2, 14, -5, 7]
//Знайдіть найменший елемент без використання Math.min.
const arr7 = [9, 2, 14, -5, 7];
let min = arr7[0];
for (let i = 0; i < arr7.length; i += 1) {
  if (min > arr7[i]) {
    min = arr7[i];
  }
}
console.log(min);

//8. Порахувати кількість входжень заданого елемента.
//Дано масив:
//["a", "b", "a", "c", "a"]
//Та елемент: "a"
//Порахуйте, скільки разів "a" зустрічається у масиві.

const arr8 = ['a', 'b', 'a', 'c', 'a'];
let count8 = 0;
for (let item of arr8) {
  if (item == 'a') {
    count8 += 1;
  }
}
console.log(`task8: ${count8}`);

//9. Додати число в початок або кінець масиву.
//Дано масив:
//[5, 7, 9]
//Та число: 12
//Якщо число більше за 10 — додайте в кінець масиву, інакше — у початок.
const array9 = [5, 7, 9];
const number9 = 12;
if (number9 > 10) {
  array9.push(number9);
} else {
  array9.unshift(number9);
}
console.log(`task9 ==> ${array9}`);

//10. Створити масив довжини n, заповнений одиницями.
//Дано число:
//n = 5
//Створіть масив довжини 5, заповнений значенням 1 .
const n = 5;
let arr10 = [];
for (let i = 0; i < n; i += 1) {
  arr10[i] = 1;
}
console.log(`task10 ==> ${arr10}`);
