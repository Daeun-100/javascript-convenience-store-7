import Inventory from "../model/Inventory.js";
import Validate from "../validate/Validate.js";
import InputView from "../View/InputView.js";
import { Console } from "@woowacourse/mission-utils";
export default class InputHandler {
  constructor() {}

  static async handleOrder(inventory) {
    try {
      const input = await InputView.order();
      const orderForm = this.createOrderForm(input);
      console.log(orderForm);

      Validate.has(orderForm, inventory);
      Validate.isEnough(orderForm, inventory);
      return orderForm;
    } catch (e) {
      Console.print(e.message);
      return await this.handleOrder(inventory);
    }
  }

  static async handlegetFree(name) {
    try {
      const input = await InputView.getFree(name);

      // Validate.isEnough(orderForm, inventory);

      return input;
    } catch (e) {
      Console.print(e.message);
      return await this.handlegetFree(name);
    }
  }

  static async handleNoBenefit({ name, noBenefitQuantity }) {
    try {
      const input = await InputView.noBenefit({ name, noBenefitQuantity });

      // Validate.isEnough(orderForm, inventory);

      return input;
    } catch (e) {
      Console.print(e.message);
      return await this.handleNoBenefit();
    }
  }

  static async handleMembership() {
    try {
      const input = await InputView.memberShip();

      // Validate.isEnough(orderForm, inventory);

      return input;
    } catch (e) {
      Console.print(e.message);
      return await this.handleMembership();
    }
  }

  static async handleReplay() {
    try {
      const input = await InputView.replay();

      // Validate.isEnough(orderForm, inventory);

      return input;
    } catch (e) {
      Console.print(e.message);
      return await this.handleReplay();
    }
  }

  static createOrderForm(orderText) {
    return orderText
      .split(",")
      .map((productAndCount) => {
        const string = productAndCount.trim().replace("[", "").replace("]", "");
        return string.split("-");
      })
      .map(([name, quantity]) => {
        return { name, quantity: Number(quantity) };
      });
  }
}
