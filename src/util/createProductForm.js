import { PRODUCT_FORM } from "../Constants.js";
export default function createProductForm([name, price, quantity, promotion]) {
  let productForm = {};
  if (promotion === null) {
    productForm = {
      ...PRODUCT_FORM,
      name,
      price: Number(price),
      normalQuantity: Number(quantity),
    };
  }
  if (promotion !== null) {
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
