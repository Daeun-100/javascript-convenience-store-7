import { Console } from "@woowacourse/mission-utils";

export default class InputView {
  static async inputText() {
    let input = await Console.readLineAsync("input text를 입력해주세요");

    return input;
  }
}
