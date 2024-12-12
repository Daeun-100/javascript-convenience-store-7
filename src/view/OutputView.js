import { Console } from "@woowacourse/mission-utils";

export default class OutputView {
  static printGreeting() {
    Console.print("안녕하세요. 편의점입니다");
    Console.print("현재 구매 가능 목록 출력합니다");
  }
  static printStock(stocksArr) {
    stocksArr.forEach((productString) => Console.print(productString));
  }
}
