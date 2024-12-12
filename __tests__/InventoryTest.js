import Inventory from "../src/model/Inventory";
import Product from "../src/model/Product";

describe("inventory 객체 테스트", () => {
  const inventory = new Inventory(
    "name,price,quantity,promotion\n콜라,1000,10,탄산2+1\n콜라,1000,10,null\n오렌지주스,1800,9,MD추천상품"
  );
  const productsFormArr = inventory.createProductsFormArr(
    "name,price,quantity,promotion\n콜라,1000,10,탄산2+1\n콜라,1000,10,null\n오렌지주스,1800,9,MD추천상품"
  );
  test("파일 텍스트로 product Form 잘 생성하는지 확인", () => {
    expect(productsFormArr[0]).toEqual({
      name: "콜라",
      price: 1000,
      normalQuantity: 10,
      promotionQuantity: 10,
      promotion: "탄산2+1",
    });
    expect(productsFormArr[1]).toEqual({
      name: "오렌지주스",
      price: 1800,
      normalQuantity: null,
      promotionQuantity: 9,
      promotion: "MD추천상품",
    });
  });
  test("product객체 잘 생성하는지 확인", () => {
    expect(inventory.products[0] instanceof Product).toBe(true);
  });
});
