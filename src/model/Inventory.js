import createProductForm from "../util/createProductForm.js";
import mergeProductForm from "../util/mergeProductForm.js";
import Product from "./Product.js";

export default class Inventory {
  #products;

  constructor(productsFormarr) {
    this.#products = this.createProductsArr(productsFormarr);
  }

  getProduct(name) {
    return this.#products.find((product) => product.isNameSame(name));
  }

  toPrintString() {
    return this.#products.map((product) => product.toPrintString());
  }

  createProductsArr(productsFormArr) {
    return productsFormArr.map((form) => new Product(form));
  }

  get products() {
    return this.#products;
  }
}
