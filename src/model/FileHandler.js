import fs from "fs";
export default class FileHandler {
  #fs;
  constructor() {
    this.#fs = fs;
  }

  readFile(path) {
    const text = fs.readFileSync(path, "utf-8");
    return text;
  }

  writeFile(text, path) {
    fs.writeFileSync(path, text, "utf-8");
  }
}
