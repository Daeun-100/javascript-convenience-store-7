import TextReader from "./TextReader";

// const exReader = new TextReader("실험\n흠...\n\n");

export default function getFormArr(fileText) {
  const textReader = new TextReader(fileText);
  const formArr = [];
  for (let i = 1; i <= textReader.length; i++) {
    const line = textReader.getLine(i);
    //텍스트 한줄 받아옴, 여기서 가공 이건 그냥 예시
    const form = getForm(line);
    formArr.push(form);
  }

  return formArr;
}

function getForm(line) {
  const [a, b, c, d] = line.split(",");
  const form = { a, b, c: String(c), d: Number(d) };
  return form;
}
