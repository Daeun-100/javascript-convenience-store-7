export default class Promotion {
  #buy;
  #get;
  #name;
  #startDate;
  #endDate;

  constructor({ name, buy, get, startDate, endDate }) {
    this.#name = name;
    this.#buy = buy;
    this.#get = get;
    this.#startDate = startDate;
    this.#endDate = endDate;
  }

  isNameSame(name) {
    if (name === this.#name) return true;
    return false;
  }

  get name() {
    return this.#name;
  }
}
