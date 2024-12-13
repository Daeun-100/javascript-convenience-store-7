import fs from "fs";
export default class FileHandler {
  static readFile(path) {
    const text = fs.readFileSync(path, "utf-8");
    return text;
  }

  static writeFile(text, path) {
    fs.writeFileSync(path, text, "utf-8");
  }
}
