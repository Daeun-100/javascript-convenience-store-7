import FileHandler from "./FileHandler.js";
import path from "path";

export default function getFileText(fileName) {
  const textPath = path.join(process.cwd(), "public", fileName);

  const fileText = FileHandler.readFile(textPath);
  return fileText;
}
