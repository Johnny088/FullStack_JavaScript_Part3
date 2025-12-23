const users = [
  { id: 1, name: 'Ivan', age: 25, active: true, salary: 1000 },
  { id: 2, name: 'Anna', age: 30, active: false, salary: 1500 },
  { id: 3, name: 'Oleh', age: 22, active: true, salary: 800 },
  { id: 4, name: 'Maria', age: 28, active: true, salary: 2000 },
  { id: 5, name: 'Petro', age: 35, active: false, salary: 1200 },
];

//------------------- task 1 (total salary sum) -------------------------
const totalSalary = users.reduce((acc, item) => {
  acc += item.salary;
  return acc;
}, 0);
console.log(`total sum is:  ${totalSalary}`);

//------------------- task 2 (total active salary sum) -------------------------

const activeSalary = users
  .filter(item => item.active === true)
  .reduce((acc, item) => {
    acc += item.salary;
    return acc;
  }, 0);
console.log(`total sum of active employees is:  ${activeSalary}`);

//------------------- task 3 (number of the elements) -------------------------

const capacity = users.reduce((acc, item) => {
  acc += 1;
  return acc;
}, 0);

console.log(`number of the elements of the array is ${capacity}`);

//------------------- task 4 (the average age) -------------------------

let averageAge = users.reduce((acc, item) => {
  acc += item.age;
  return acc;
}, 0);

averageAge = averageAge / capacity;
console.log(`the average age of the students is: ${averageAge}`);

//------------------- task 5  -------------------------

const nameById = users.reduce((acc, item) => {
  const newId = item.id;
  acc[item.id] = item.name;
  return acc;
}, {});
console.log(nameById);

//------------------- task 6  -------------------------

const usersState = users.reduce(
  (acc, item) => {
    if (item.active === true) {
      acc.active += 1;
    } else {
      acc.passive += 1;
    }
    return acc;
  },
  { active: 0, passive: 0 }
);

console.log(usersState);

//------------------- task 7  -------------------------

const maxSalary = users.reduce((acc, item) => {
  if (item.salary > acc) {
    acc = item.salary;
  }
  return acc;
}, 0);

console.log(`max salary is: ${maxSalary}`);

//------------------- task 8  -------------------------
const salaryByGroup = users.reduce(
  (acc, item) => {
    if (item.age >= 30) {
      acc.adult += item.salary;
    } else {
      acc.young += item.salary;
    }
    return acc;
  },
  { young: 0, adult: 0 }
);

console.log(salaryByGroup);

//------------------- task 9  -------------------------

const length = users.reduce((acc, item) => {
  const tempLength = item.name.length;
  acc.push(tempLength);
  return acc;
}, []);

console.log(length);

//------------------- task 10  -------------------------

const stringArr = users.reduce((acc, item) => {
  const stringTemp = `${item.name} (${item.salary})`;
  acc.push(stringTemp);
  return acc;
}, []);

console.log(stringArr);

//------------------- task 11  -------------------------

const activeTotalSalary = users.reduce((acc, item) => {
  if (item.active === true) {
    acc += item.salary;
  }
  return acc;
}, 0);

console.log(activeTotalSalary);

//------------------- task 12  -------------------------

const isActive = users.every(item => item.active === true);
console.log(isActive);

//------------------- task 13  -------------------------

const ageFilter = users.every(item => item.age > 18);
console.log(ageFilter);

//------------------- task 14  -------------------------

const sortedArray = users.toSorted((a, b) => a.age - b.age);
console.log(sortedArray);

//------------------- task 15  -------------------------
const descActiveSort = users
  .filter(item => item.active === true)
  .toSorted((a, b) => b.salary - a.salary);
console.log(descActiveSort);
