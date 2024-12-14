export default function quantityToString(quantity) {
  if (quantity === null || quantity === 0) {
    return "재고 없음";
  }
  return `${quantity}개`;
}
