import Inventory from "../model/Inventory.js";
import Validate from "../validate/Validate.js";
import InputView from "../View/InputView.js";
import { Console } from "@woowacourse/mission-utils";
export default class InputHandler {
  constructor() {}

  static async handleInput() {
    try {
      const input = await InputView.inputText();
      //input 가공
      //validate
      Validate.validateInput();

      //input값 리턴, 다른 class에서 받아서 사용
      return input;
    } catch (e) {
      //에러 발생시 다시 input
      //this.inputText이름 바꾸기!!!
      Console.print(e.message);
      return await this.handleInput();
    }
  }
  static async handleOrder(inventory) {
    try {
      const input = await InputView.order();
      const orderForm = this.createOrderForm(input);

      Validate.isEnough(orderForm, inventory);

      return orderForm;
    } catch (e) {
      Console.print(e.message);
      return await this.handleOrder(inventory);
    }
  }
  static createOrderForm(orderText) {
    return orderText
      .split(",")
      .map((productAndCount) => productAndCount.trim().slice(1, -1).split("-"))
      .map(([name, quantity]) => {
        return { name, quantity: Number(quantity) };
      });
  }
}
