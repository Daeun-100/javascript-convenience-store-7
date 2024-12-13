import Promotion from "./Promotion.js";
export default class Promotions {
  #promotions;
  constructor(textFile) {
    this.#promotions = this.createPromotionsArr(
      this.createPromotionsFormArr(textFile)
    );
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

  createPromotionsFormArr(fileText) {
    const textArr = fileText.split("\n");
    const promotionsFormArr = [];

    for (let i = 1; i < textArr.length - 1; i++) {
      const textLine = textArr[i];
      const [name, buy, get, startDate, endDate] = textLine.split(",");
      const form = { name, buy, get, startDate, endDate: endDate.trim() };
      promotionsFormArr.push(form);
    }

    return promotionsFormArr;
  }
}
