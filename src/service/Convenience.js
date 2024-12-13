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
      //증정품 개수
      //총구매액
      //행사할인
      //몜버십할인
      //내실돈
    };
  }

  async loop() {
    for (let { name, quantity } of this.#orders) {
      await this.getFree({ name, quantity });
    }
  }

  async getFree({ name, quantity }) {
    if (this.canGetFree({ name, quantity })) {
      const YorN = await InputHandler.handlegetFree(name);
      if (YorN === "Y") {
        //증정품한개 추가
        console.log(this.#orders);
        this.#orders.find(({ name }) => name === name).quantity += 1;
        console.log(this.#orders);
      }
    }
  }

  canGetFree({ name, quantity }) {
    const product = this.#inventory.getProduct(name);
    return product.canGetFree(quantity);
  }
}
