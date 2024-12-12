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
  toPrintString() {
    if (this.#promotion === null) {
      return this.getNormalString();
    }
    return this.getPromotionString() + `\n` + this.getNormalString();
  }
  getPromotionString() {
    return `${this.#name} ${this.#price.toLocaleString()}원 ${
      this.#promotionQuantity
    }개 ${this.#promotion}`;
  }
  getNormalString() {
    return `${this.#name} ${this.#price.toLocaleString()}원 ${
      this.#normalQuantity
    }개`;
  }
}
