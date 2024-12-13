import Promotions from "../src/model/Promotions";

describe("Promotions 객체 테스트", () => {
  const promotoins = new Promotions(
    "name,buy,get,start_date,end_date\n탄산2+1,2,1,2024-01-01,2024-12-31\nMD추천상품,1,1,2024-01-01,2024-12-31\n반짝할인,1,1,2024-11-01,2024-11-30\n)"
  );
  test("match테스트", () => {
    expect(promotoins.match("탄산2+1").name).toBe("탄산2+1");
  });
});
