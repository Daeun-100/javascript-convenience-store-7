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
        throw new Error("[ERROR] 재고 수량이 중분하지 않습니다");
      }
    });
  }
}
