//getTextFile로 받은 text를 넘겨줌
export default class TextReader {
  #lines;
  constructor(text) {
    this.#lines = text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  }

  get length() {
    return this.#lines.length;
  }

  getLine(lineNumber) {
    if (lineNumber < 1 || lineNumber > this.#lines.length) {
      return null;
    }
    return this.#lines[lineNumber - 1];
  }
}
