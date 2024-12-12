import InputHandler from "../inputHandler/InputHandler.js";

export default class Controller {
  constructor() {}

  async play() {
    const input = await InputHandler.getValidatedInput();
  }
}
