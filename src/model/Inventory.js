import createProductForm from "../util/createProductForm.js";
import mergeProductForm from "../util/mergeProductForm.js";
import Product from "./Product.js";

export default class Inventory {
  #products;
  #promotions;
  constructor(fileText, promotions) {
    this.#promotions = promotions;
    this.#products = this.createProductsArr(
      this.createProductsFormArr(fileText)
    );
  }

  getProduct(name) {
    return this.#products.find((product) => product.isNameSame(name));
  }

  toPrintString() {
    return this.#products.map((product) => product.toPrintString());
  }

  matchPromotion(promotionName) {
    if (promotionName === "null") return null;
    return this.#promotions.match(promotionName);
  }

  createProductsFormArr(fileText) {
    const textArr = fileText.split("\n");
    const productsFormArr = [];

    for (let i = 1; i < textArr.length - 1; i++) {
      const textLine = textArr[i];
      const [name, price, quantity, promotion] = textLine.split(",");
      let productForm = createProductForm([
        name,
        price,
        quantity,
        this.matchPromotion(promotion.trim()),
      ]);

      if (
        productsFormArr.at(-1) &&
        productsFormArr.at(-1).name === productForm.name
      ) {
        const sameProductsForm = productsFormArr.pop();
        productForm = mergeProductForm(sameProductsForm, productForm);
      }

      productsFormArr.push(productForm);
    }
    return productsFormArr;
  }

  createProductsArr(productsFormArr) {
    return productsFormArr.map((form) => new Product(form));
  }

  get products() {
    return this.#products;
  }
}
