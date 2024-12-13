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

  getNoBenefitQuantity(quantity) {
    //프로모션 적용 가능 개수, quantity가 프로모션 개수보다 클때때
    const availableQuantity = this.getPromotionAvailableQuantity();
    return quantity - availableQuantity;
  }

  getPromotionAvailableQuantity() {
    return (
      Math.floor(this.#promotionQuantity / this.#promotion.getBuyGet()) *
      this.#promotion.getBuyGet()
    );
  }

  getGiftCount(quantity) {
    if (quantity < this.#promotionQuantity) {
      return quantity / this.#promotion.getBuyGet();
    }
    this.getPromotionAvailableQuantity() / this.#promotion.getBuyGet();
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
