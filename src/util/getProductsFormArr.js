import TextReader from "./TextReader.js";
import { PRODUCT_FORM } from "../Constants.js";
import Promotions from "../model/Promotions.js";
import mergeProductForm from "./mergeProductForm.js";
export default function getProductsFormArr(fileText) {
  const textReader = new TextReader(fileText);
  const formArr = [];
  for (let i = 2; i <= textReader.length; i++) {
    const line = textReader.getLine(i);
    let form = getForm(line);
    if (formArr.at(-1) && formArr.at(-1).name == form.name) {
      const sameProductForm = formArr.pop();
      form = mergeProductForm(sameProductForm, form);
    }
    formArr.push(form);
  }

  return formArr;
}

function createProductForm([name, price, quantity, promotion]) {
  let productForm = {};
  if (promotion === "null") {
    productForm = {
      ...PRODUCT_FORM,
      name,
      price: Number(price),
      normalQuantity: Number(quantity),
    };
  }
  if (promotion !== "null") {
    productForm = {
      ...PRODUCT_FORM,
      name,
      price: Number(price),
      promotionQuantity: Number(quantity),
      promotion,
    };
  }
  return productForm;
}

function getForm(line) {
  const [name, price, quantity, promotion] = line.split(",");
  const form = createProductForm([name, price, quantity, promotion]);
  return form;
}
