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
    this.#orderId;
  }
  addProduct(product) {
    this.products.push(product);
  }
  getTotalPrice() {}
  getProductCount() {}
  get summary() {}
  #logOrder() {
    console.log('Order created:');
  }
}
const order1 = new Order();
order1.addProduct(prod1);
console.log(order1);
