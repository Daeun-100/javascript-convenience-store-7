import { Console } from "@woowacourse/mission-utils";

export default class OutputView {
  static printGreeting() {
    Console.print("안녕하세요. 편의점입니다");
    Console.print("현재 구매 가능 목록 출력합니다");
  }
  static printStock(stocksArr) {
    stocksArr.forEach((productString) => Console.print(productString));
  }
  static printReciept({
    orders,
    totalPrice,
    gift,
    promotionDiscount,
    memgershipDiscount,
  }) {
    Console.print("-----편의점-----");
    const ordersArr = Object.entries(orders);
    Console.print("상품명" + " " + "수량");
    ordersArr.forEach(([name, quantity]) => {
      Console.print(name + " " + quantity + "개");
    });
    Console.print("-----증정-----");
    const giftArr = Object.entries(gift);
    giftArr.forEach(([name, quantity]) => {
      Console.print(name + " " + quantity + "개");
    });
    Console.print("-----------");
    Console.print("총구매액" + " " + totalPrice);
    Console.print("행사할인" + " -" + promotionDiscount);
    Console.print("멤버십할인" + " -" + memgershipDiscount);
    const finalAmount = totalPrice - promotionDiscount - memgershipDiscount;
    Console.print("내실돈" + " " + finalAmount);
  }
}
