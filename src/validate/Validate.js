export default class Validate {
  static validateInput() {
    if (true) {
      throw new Error("[ERROR] 에러 메시지");
    }
  }

  static isEnough(orders, inventory) {
    orders.forEach((order) => {
      const product = inventory.getProduct(order.name);

      if (!product.isTotalQuantityEnough(order.quantity)) {
        throw new Error(
          "[ERROR] 재고 수량을 초과하여 구매할 수 없습니다. 다시 입력해 주세요"
        );
      }
    });
  }
  static has(orders, inventory) {
    orders.forEach((order) => {
      const product = inventory.getProduct(order.name);

      if (!product) {
        throw new Error("[ERROR] 존재하지 않는 상품입니다. 다시 입력해주세요");
      }
    });
  }
  validateFormat(input) {
    const inputArr = input.split(",");
    inputArr.forEach((input) => {
      if (input[0] !== "[" || input[input.length - 2] !== "]") {
        throw new Error("[ERROR] 알맞은 형식으로 입력해주세요");
      }
    });
  }
  isNumber(orders) {
    orders.forEach((order) => {
      if (Number.isNaN(order.quantity)) {
        throw new Error(
          "[ERROR] 올바르지 않은 형식으로 입력했습니다. 다시 입력해주세요"
        );
      }
    });
  }
}
