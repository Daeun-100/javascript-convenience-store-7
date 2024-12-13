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

  buy(quantity) {
    let restQuantity = quantity;
    if (this.#promotionQuantity >= quantity) {
      this.#promotionQuantity -= quantity;
      return;
    }
    restQuantity -= this.#promotionQuantity;
    this.#promotionQuantity = 0;
    this.#normalQuantity -= restQuantity;
  }

  getPriceByQuantity(quantity) {
    return this.#price * quantity;
  }

  isTotalQuantityEnough(quantity) {
    if (this.#normalQuantity + this.#promotionQuantity < quantity) {
      return false;
    }
    return true;
  }

  isNoBenefit(quantity) {
    if (
      this.#promotion.isAvailable(new Date()) &&
      quantity > this.#promotionQuantity
    ) {
      return true;
    }

    return false;
  }

  getNoPromotionQuantity(quantity) {
    const availableQuantity = this.getPromotionAvailableQuantity(quantity);
    return quantity - availableQuantity;
  }

  getNoPromotionPrice(quantity) {
    return this.getNoPromotionQuantity(quantity) * this.#price;
  }

  getPromotionAvailableQuantity(quantity) {
    if (quantity > this.#promotionQuantity) {
      return (
        Math.floor(this.#promotionQuantity / this.#promotion.getBuyGet()) *
        this.#promotion.getBuyGet()
      );
    }
    return Math.floor(
      (quantity / this.#promotion.getBuyGet()) * this.#promotion.getBuyGet()
    );
  }

  getGiftCount(quantity) {
    if (quantity < this.#promotionQuantity) {
      return quantity / this.#promotion.getBuyGet();
    }
    return (
      this.getPromotionAvailableQuantity(quantity) / this.#promotion.getBuyGet()
    );
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
