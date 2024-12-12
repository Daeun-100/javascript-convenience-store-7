export default function quantityToString(quantity) {
  if (quantity === null) {
    return "재고없음";
  }
  return `${quantity}개`;
}
