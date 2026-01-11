class Product {
  name;
  _price;
  category;
  #id;
  constructor({ name, price, category }) {
    this.name = name;
    this._price = price;
    this.category = category;
    this.#id = Product.productGeneratId();
  }
  static productCounter = 0;
  static productGeneratId() {
    return (Product.productCounter += 1);
  }
  get info() {
    return `${this.name}|${this.category}|${this._price}$`;
  }
  set price(newPrice) {
    if (newPrice < 0 || Number.isNaN(newPrice)) {
      console.warn("your price isn't correct");
      return;
    }
    this._price = Number(newPrice);
  }
}

const prod1 = new Product({
  name: 'laptop',
  category: 'electronics',
  price: 1200,
});
const prod2 = new Product({
  name: 'smartTv',
  category: 'electronics',
  price: 500,
});
const prod3 = new Product({
  name: 'Iphone',
  category: 'electronics',
  price: 800,
});
console.log(prod1);
console.log(prod1.info);
console.log((prod1.price = -1000));
console.log((prod1.price = '1000'));
console.log(prod1.info);

// --------------------------- task2 --------------------------------

class Order {
  #orderId;
  #products;
  constructor() {
    this.#products = [];
    this.#orderId = Order.currentId();
    this.#logOrder();
  }
  addProduct(product) {
    this.#products.push(product);
  }
  getTotalPrice() {
    return this.#products.reduce((acc, item) => {
      acc += item._price;
      return acc;
    }, 0);
  }
  getProductCount() {
    return this.#products.length;
  }
  get summary() {
    const count = this.getProductCount();
    const total = this.getTotalPrice();
    return `Order #${this.#orderId}: ${count} items, total ${total}$`;
  }
  #logOrder() {
    console.log(`Order created: ${this.#orderId}`);
  }
  static id = 0;
  static currentId() {
    return (Order.id += 1);
  }
}
console.log(`task 2`);
const order1 = new Order();
order1.addProduct(prod1);
order1.addProduct(prod2);
order1.addProduct(prod3);
console.log(order1.getTotalPrice());
console.log(order1.getProductCount());
console.log(order1.summary);

// -------------------------------------- task3 ----------------------------------------
class PremiumOrder extends Order {
  discount;
  constructor(discount) {
    super();
    this.discount = discount;
  }
  getTotalPrice() {
    const baseTotal = super.getTotalPrice();
    const total = baseTotal - (this.discount * baseTotal) / 100;
    return total;
  }
}
premiumOrder = new PremiumOrder(15);
premiumOrder.addProduct(prod1);
premiumOrder.addProduct(prod2);
premiumOrder.addProduct(prod3);
console.log(`task 3`);
console.log(premiumOrder.getTotalPrice());
console.log(premiumOrder.summary);

// ----------------------- task 4 ----------------------------
class User {
  name;
  email;
  #orders;
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.#orders = [];
  }
  addOrder(order) {
    this.#orders.push(order);
  }
  getOrderCount() {
    return this.#orders.length;
  }
  listOrders() {
    return this.#orders;
  }
  get lastOrder() {
    if (this.#orders.length === 0) {
      return null;
    }
    return this.#orders[this.#orders.length - 1];
  }
}
console.log('task4');
const user1 = new User('Johnny', 'Johnny@gmail.com');
const user2 = new User('Bob', 'Bob@gmail.com');
const order2 = new Order();
const order3 = new Order();
order2.addProduct(prod2);
order3.addProduct(prod3);
order3.addProduct(prod1);
user1.addOrder(order1);
user1.addOrder(order2);
user1.addOrder(order3);
console.log(user1.getOrderCount());
console.log(user1.listOrders());
console.log(user1.lastOrder);
console.log(user2.lastOrder);
