import TextReader from "./TextReader.js";

// const exReader = new TextReader("실험\n흠...\n\n");

export default function getPromotionsFormArr(fileText) {
  const textReader = new TextReader(fileText);
  const formArr = [];
  for (let i = 2; i <= textReader.length; i++) {
    const line = textReader.getLine(i);
    //텍스트 한줄 받아옴, 여기서 가공 이건 그냥 예시
    const form = getForm(line);
    formArr.push(form);
  }

  return formArr;
}

function getForm(line) {
  const [name, buy, get, startDate, endDate] = line.split(",");
  const form = {
    name,
    buy: Number(buy),
    get: Number(get),
    startDate: new Date(startDate),
    endDate: new Date(endDate),
  };
  return form;
}
