const employee = {
  name: 'Vitalii',
  position: 'Developer',
  level: 'Middle',
  salary: 2500,
};
const { name: fullName, salary: monthlySalary } = employee;
console.log(`fullname: ${fullName} \nMonthly Salary: ${monthlySalary}`);

// ---------------task 2 ----------------------

const settings = {
  mode: 'light',
  notifications: true,
  volume: 70,
};

const updatedSettings = { ...settings, mode: 'dark' };
console.log(updatedSettings);

// ---------------------- task3 -----------------------------

const car = {
  brand: 'Mazda',
  model: 'CX-5',
  year: 2018,
  mileage: 90000,
  color: 'red',
};

const { brand, ...details } = car;
console.log(details);

// -------------------- task4 -----------------------

const departments = [
  { title: 'HR', budget: 15000 },
  { title: 'IT', budget: 45000 },
  { title: 'Marketing', budget: 20000 },
];

let totalBudget = 0;
departments.forEach(item => {
  totalBudget += item.budget;
});

console.log(totalBudget);

// --------------task5 -------------------------

const items = [
  { name: 'Book', price: 200 },
  { name: 'Pen', price: 30 },
  { name: 'Notebook', price: 80 },
];

const newPrices = items.map(item => {
  const persentage = item.price + item.price * 0.15;
  return persentage;
});

console.log(newPrices);

// --------------- task6 -------------------------

const accounts = [
  { user: 'Anna', active: true },
  { user: 'Oleg', active: false },
  { user: 'Nina', active: true },
];

const active = accounts.filter(item => item.active === true);
console.log(active);

// --------------- task7 -------------------------

const users = [
  { name: 'Stepan', email: 's@example.com' },
  { name: 'Olha', email: 'o@example.com' },
  { name: 'Ihor', email: 'i@example.com' },
];

const query = users.find(item => item.email === 'o@example.com');

console.log(query);

// --------------- task8 -------------------------

const words = ['dog', 'window', 'car', 'elephant'];

const index = words.findIndex(item => item.length > 5);
console.log(index);

// --------------- task9 -------------------------

const students = [
  { name: 'Ivan', subjects: ['math', 'physics'] },
  { name: 'Olya', subjects: ['biology'] },
  { name: 'Nazar', subjects: ['chemistry', 'math'] },
];

const subjects = students.flatMap(item => {
  return item.subjects;
});
console.log(subjects);

// --------------- task10 -------------------------

const products = [
  { title: 'Camera', price: 500 },
  { title: 'Tripod', price: 120 },
  { title: 'Light', price: 250 },
  { title: 'Mic', price: 80 },
];

const filteredProducts = products.filter(item => item.price > 200);

console.log(filteredProducts);

const mappedProducts = filteredProducts.map(
  item => `${item.title} - ${item.price}`
);
console.log(mappedProducts);
