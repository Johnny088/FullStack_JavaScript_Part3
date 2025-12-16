// ============task 1 ===================
const userObj = {
  firstName: 'Johnny',
  lastName: 'Smith',
  age: 25,
};
console.log(userObj);

// task 2 =====================

userObj.fullName = function () {
  return userObj.firstName + ' ' + userObj.lastName;
};
console.log(userObj.fullName());

// task 3 ==========================================

const defUpperStr = function (text = null) {
  return (text || 'default text').toUpperCase();
};
console.log(defUpperStr('text'));
console.log(defUpperStr());

// task 4 ==================================

const evenNumbers = function (n) {
  const tempArray = [];
  for (let i = 0; i <= n; i += 1) {
    if (i > 0 && i % 2 == 0) {
      tempArray.push(i);
    }
  }
  return tempArray;
};

console.log(evenNumbers(10));
console.log(evenNumbers(20));
console.log(evenNumbers(30));

// task5 =================
const weekFn = function (day) {
  switch (day) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    case 7:
      return 'Sunday';

    default:
      return null;
  }
};
console.log(weekFn(1)); // 'Понеділок'
console.log(weekFn(3)); // 'Середа'
console.log(weekFn(7)); // 'Неділя'
console.log(weekFn(9)); // null
console.log(weekFn(1.5)); // null
console.log(weekFn('2')); // null

//task6 =====================================
const ageClassification = function (n) {
  return n <= 0
    ? null
    : n <= 24
    ? 'Дитинство'
    : n <= 44
    ? 'Молодість'
    : n <= 65
    ? 'Зрілість'
    : n <= 75
    ? 'Старість'
    : n <= 90
    ? 'Довголіття'
    : n <= 122
    ? 'Рекорд'
    : null;
};

console.log('    -1 :', ageClassification(-1) === null); // -1 : null
console.log('     0 :', ageClassification(0) === null); // 0 : null
console.log('     1 :', ageClassification(1) === 'Дитинство'); // 1 : Дитинство
console.log('    24 :', ageClassification(24) === 'Дитинство'); // 24 : Дитинство
console.log(' 24.01 :', ageClassification(24.01) === 'Молодість'); // 24.01 : Молодість
console.log('    44 :', ageClassification(44) === 'Молодість'); // 44 : Молодість
console.log(' 44.01 :', ageClassification(44.01) === 'Зрілість'); // 44.01 : Зрілість
console.log('    65 :', ageClassification(65) === 'Зрілість'); // 65 : Зрілість
console.log('  65.1 :', ageClassification(65.1) === 'Старість'); // 65.1 : Старість
console.log('    75 :', ageClassification(75) === 'Старість'); // 75 : Старість
console.log(' 75.01 :', ageClassification(75.01) === 'Довголіття'); // 75.01 : Довголіття
console.log('    90 :', ageClassification(90) === 'Довголіття'); // 90 : Довголіття
console.log(' 90.01 :', ageClassification(90.01) === 'Рекорд'); // 90.01 : Рекорд
console.log('   122 :', ageClassification(122) === 'Рекорд'); // 122 : Рекорд
console.log('122.01 :', ageClassification(122.01) === null); // 122.01 : null
console.log('   150 :', ageClassification(150) === null); // 150 : null

// ========================== task 7 ==============================
const oddFn = function (n) {
  let i = 0;
  const temp = [];
  do {
    i += 1;
    if (i % 2 != 0) {
      temp.push(i);
    }
  } while (i != n);
  return temp;
};
console.log(oddFn(10)); // [1, 3, 5, 7, 9]
console.log(oddFn(15)); // [1, 3, 5, 7, 9, 11, 13, 15]
console.log(oddFn(20)); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

// ====================================== task 8 =====================

const mainFunc = function (a, b, callback) {
  if (typeof callback === 'function') {
    return callback(a, b);
  } else {
    return false;
  }
};
const cbRandom = function (a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
};
const cbPow = function (a, b) {
  return Math.pow(a, b);
};
const cbAdd = function (a, b) {
  return a + b;
};
console.log(mainFunc(2, 5, cbRandom)); // цілі числа в діапазоні 2..5
console.log(mainFunc(2, 5, cbPow)); // 32
console.log(mainFunc(2, 5, cbAdd)); // 7
console.log(mainFunc(2, 5, 'not a func')); // false
