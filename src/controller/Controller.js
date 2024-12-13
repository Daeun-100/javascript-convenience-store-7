import InputHandler from "../inputHandler/InputHandler.js";
import Convenience from "../service/Convenience.js";
import FileHandler from "../model/FileHandler.js";
import Inventory from "../model/Inventory.js";
import Promotions from "../model/Promotions.js";
import OutputView from "../view/OutputView.js";
import getFileText from "../util/getTextFile.js";
import path from "path";
import getPromotionsFormArr from "../util/getPromotionsFormArr.js";
import getProductsFormArr from "../util/getProductsFormArr.js";
export default class Controller {
  constructor() {}

  async play() {
    //md파일가공공
    const productsFileText = getFileText("products.md");
    const promotionsFileText = getFileText("promotions.md");

    const promotions = new Promotions(getPromotionsFormArr(promotionsFileText));
    const productsFormarr = getProductsFormArr(productsFileText).map(
      ({ promotion, ...rest }) => {
        return { ...rest, promotion: promotions.match(promotion) };
      }
    );
    const inventory = new Inventory(productsFormarr);
    this.loop(inventory);
  }

  async loop(inventory) {
    //출력력
    const stocksString = inventory.toPrintString();
    OutputView.printStock(stocksString);
    //주문받음음
    const orders = await InputHandler.handleOrder(inventory);

    const convenience = new Convenience(orders, inventory);
    await convenience.purchase();

    const isReplay = await InputHandler.handleReplay();
    if (isReplay === "Y") {
      await this.loop(inventory);
    }
  }
}
