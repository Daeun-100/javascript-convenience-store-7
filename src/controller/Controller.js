import InputHandler from "../inputHandler/InputHandler.js";
import Convenience from "../model/Convenience.js";
import FileHandler from "../model/FileHandler.js";
import Inventory from "../model/Inventory.js";
import OutputView from "../view/OutputView.js";
import path from "path";
export default class Controller {
  constructor() {}

  async play() {
    const fileText = this.getFileText();
    const inventory = new Inventory(fileText);
    const stocksString = inventory.toPrintString();
    OutputView.printStock(stocksString);
    const orders = await InputHandler.handleOrder(inventory);
    console.log(orders);
    const convenience = new Convenience(orders);
  }
  getFileText() {
    const fileHandler = new FileHandler();
    const textPath = path.join(process.cwd(), "public", "products.md");
    const fileText = fileHandler.readFile(textPath);
    return fileText;
  }
}
