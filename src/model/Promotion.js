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

  isAvailable(date) {
    if (this.#startDate < date < this.#endDate) {
      return true;
    }
    return false;
  }

  isNameSame(name) {
    if (name === this.#name) return true;
    return false;
  }

  getGiftCount(count) {
    return Math.floor(count / (this.#buy + this.#get)) * this.get;
  }

  canGetFree(count) {
    if (count >= this.#buy && count % (this.#buy + this.#get) === this.#buy) {
      return true;
    }
    return false;
  }
  get name() {
    return this.#name;
  }
}
