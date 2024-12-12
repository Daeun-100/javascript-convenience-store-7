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
}
