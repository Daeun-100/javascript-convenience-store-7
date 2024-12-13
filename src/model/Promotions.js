import Promotion from "./Promotion.js";
export default class Promotions {
  #promotions;
  constructor(promotionsFormArr) {
    this.#promotions = this.createPromotionsArr(promotionsFormArr);
  }

  match(name) {
    const selectedPromotion = this.#promotions.find((promotion) =>
      promotion.isNameSame(name)
    );
    if (selectedPromotion) return selectedPromotion;
    return null;
  }

  createPromotionsArr(arr) {
    return arr.map((form) => new Promotion(form));
  }
}
