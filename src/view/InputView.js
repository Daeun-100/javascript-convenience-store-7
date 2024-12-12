import { Console } from "@woowacourse/mission-utils";

export default class InputView {
  static async order() {
    let input = await Console.readLineAsync(
      "구매하실 상품명과 수량을 입력해주세요"
    );

    return input;
  }
}
