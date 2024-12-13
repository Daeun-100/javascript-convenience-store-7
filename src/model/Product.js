import quantityToString from "../util/quantityToString.js";
export default class Product {
  #name;
  #price;
  #normalQuantity;
  #promotionQuantity;
  #promotion;
  constructor({ name, price, normalQuantity, promotionQuantity, promotion }) {
    this.#name = name;
    this.#price = price;
    this.#normalQuantity = normalQuantity;
    this.#promotionQuantity = promotionQuantity;
    this.#promotion = promotion;
  }

  isNameSame(name) {
    if (name === this.#name) return true;
  }

  isTotalQuantityEnough(quantity) {
    if (this.#normalQuantity + this.#promotionQuantity < quantity) {
      return false;
    }
    return true;
  }

  canGetFree(quantity) {
    if (
      this.#promotion.isAvailable(new Date()) &&
      this.isEnoughGetFree(quantity) &&
      this.#promotion.canGetFree(quantity)
    ) {
      return true;
    }
    return false;
  }

  isEnoughGetFree(quantity) {
    if (this.#promotionQuantity >= quantity + 1) {
      return true;
    }
    return false;
  }

  toPrintString() {
    if (this.#promotion === null) {
      return this.getNormalString();
    }
    return this.getPromotionString() + `\n` + this.getNormalString();
  }

  getPromotionString() {
    return `${this.#name} ${this.#price.toLocaleString()}원 ${quantityToString(
      this.#promotionQuantity
    )} ${this.#promotion.name}`;
  }

  getNormalString() {
    return `${this.#name} ${this.#price.toLocaleString()}원 ${quantityToString(
      this.#normalQuantity
    )}`;
  }
}
