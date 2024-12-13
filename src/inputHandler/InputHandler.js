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

      Validate.isEnough(orderForm, inventory);

      return orderForm;
    } catch (e) {
      Console.print(e.message);
      return await this.handleOrder(inventory);
    }
  }

  static async handlegetFree() {
    try {
      const input = await InputView.getFree();

      // Validate.isEnough(orderForm, inventory);

      return input;
    } catch (e) {
      Console.print(e.message);
      return await this.handlegetFree();
    }
  }

  static async handleNoBenefit() {
    try {
      const input = await InputView.noBenefit();

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
      .map((productAndCount) => productAndCount.trim().slice(1, -1).split("-"))
      .map(([name, quantity]) => {
        return { name, quantity: Number(quantity) };
      });
  }
}
