import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../Constants.js";

export default class InputView {
  static async order() {
    let input = await Console.readLineAsync(INPUT_MESSAGE.order);

    return input;
  }

  static async getFree(name) {
    let input = await Console.readLineAsync(INPUT_MESSAGE.getFree(name));

    return input;
  }

  static async noBenefit() {
    let input = await Console.readLineAsync(INPUT_MESSAGE.noBenefit);

    return input;
  }

  static async memberShip() {
    let input = await Console.readLineAsync(INPUT_MESSAGE.membership);

    return input;
  }

  static async replay() {
    let input = await Console.readLineAsync(INPUT_MESSAGE.replay);

    return input;
  }
}
