import InputHandler from "../inputHandler/InputHandler.js";
import Convenience from "../model/Convenience.js";
import FileHandler from "../model/FileHandler.js";
import Inventory from "../model/Inventory.js";
import Promotions from "../model/Promotions.js";
import OutputView from "../view/OutputView.js";
import path from "path";
export default class Controller {
  constructor() {}

  async play() {
    const productsFileText = this.getFileText("products.md");
    const promotionsFileText = this.getFileText("promotions.md");

    const promotions = new Promotions(promotionsFileText);

    const inventory = new Inventory(productsFileText, promotions);
    const stocksString = inventory.toPrintString();
    OutputView.printStock(stocksString);
    const orders = await InputHandler.handleOrder(inventory);
    console.log(orders);
    const convenience = new Convenience(orders, inventory);
  }
  getFileText(pathtext) {
    const fileHandler = new FileHandler();
    const textPath = path.join(process.cwd(), "public", pathtext);
    const fileText = fileHandler.readFile(textPath);
    return fileText;
  }
}
