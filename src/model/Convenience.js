export default class Convenience {
  //[{name:감자침 , count:2}]
  #orders;
  #inventory;
  constructor(orders, inventory, promotions) {
    this.#orders = orders;
    this.#inventory = inventory;
  }
}
