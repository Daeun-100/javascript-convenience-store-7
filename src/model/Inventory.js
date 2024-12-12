import { PRODUCT_FORM } from "../Constants";
import createProductForm from "../util/createProductForm";
import mergeProductForm from "../util/mergeProductForm";
import Product from "./Product";
export default class Inventory {
  #products;
  constructor(fileText) {
    this.#products = this.createProductsArr(
      this.createProductsFormArr(fileText)
    );
  }

  createProductsFormArr(fileText) {
    const textArr = fileText.split("\n");
    const productsFormArr = [];

    for (let i = 1; i < textArr.length; i++) {
      const textLine = textArr[i];
      const [name, price, quantity, promotion] = textLine.split(",");
      let productForm = createProductForm([name, price, quantity, promotion]);

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
