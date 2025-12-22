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

const activeSalary = users
  .filter(item => item.active === true)
  .reduce((acc, item) => {
    acc += item.salary;
    return acc;
  }, 0);
console.log(`total sum of active employees is:  ${activeSalary}`);
