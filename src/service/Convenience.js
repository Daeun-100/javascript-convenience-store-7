import InputHandler from "../inputHandler/InputHandler.js";

export default class Convenience {
  //[{name:감자침 , count:2}]
  #orders;
  #inventory;
  #final;
  constructor(orders, inventory) {
    this.#orders = orders;
    this.#inventory = inventory;
    this.#final = {
      //구매한 상품 정보
      //총구매액
      totalPrice: 0,
      //증정품 개수
      gift: {},
      //행사할인
      promotionDiscount: 0,
      noPromotionPrice: 0,
      //몜버십할인
      memgershipDiscount: 0,
      //내실돈
    };
  }

  orderInfo() {
    for (let { name, quantity } of this.#orders) {
      const product = this.#inventory.getProduct(name);
      const price = product.getPriceByQuantity(quantity);
      this.#final.totalPrice += price;
      const giftCount = product.getGiftCount(quantity);
      this.#final.gift[name] = giftCount;
      this.#final.promotionDiscount += product.getPriceByQuantity(giftCount);
      this.#final.noPromotionPrice += product.getNoPromotionPrice(quantity);
    }
  }

  getMembershipDiscount(price) {
    let discountPrice = price * 0.3;
    if (discountPrice > 8000) {
      discountPrice = 8000;
    }
    return discountPrice;
  }

  async loop() {
    for (let { name, quantity } of this.#orders) {
      await this.getFree({ name, quantity });
      await this.noBenefit({ name, quantity });
    }

    this.orderInfo();

    await this.membership();
    console.log(this.#final);
    this.buy();
  }

  buy() {
    for (let { name, quantity } of this.#orders) {
      const product = this.#inventory.getProduct(name);
      product.buy(quantity);
    }
  }

  async getFree({ name, quantity }) {
    if (this.canGetFree({ name, quantity })) {
      const YorN = await InputHandler.handlegetFree(name);
      if (YorN === "Y") {
        this.#orders.find(({ name }) => name === name).quantity += 1;
      }
    }
  }
  async noBenefit({ name, quantity }) {
    if (this.isNoBenefit({ name, quantity })) {
      const product = this.#inventory.getProduct(name);
      const noBenefitQuantity = product.getNoPromotionQuantity(quantity);
      const YorN = await InputHandler.handleNoBenefit({
        name,
        noBenefitQuantity,
      });
      if (YorN === "N") {
        console.log(this.#orders);
        this.#orders.find(({ name }) => name === name).quantity -=
          noBenefitQuantity;
      }
      console.log(this.#orders);
    }
  }

  isNoBenefit({ name, quantity }) {
    const product = this.#inventory.getProduct(name);
    return product.isNoBenefit(quantity);
  }

  canGetFree({ name, quantity }) {
    const product = this.#inventory.getProduct(name);
    return product.canGetFree(quantity);
  }

  async membership() {
    const YorN = await InputHandler.handleMembership();
    if (YorN === "Y") {
      this.#final.memgershipDiscount += this.getMembershipDiscount(
        this.#final.noPromotionPrice
      );
    }
  }
}
