import selectNotNull from "./selectNotNull.js";

export default function mergeProductForm(form1, form2) {
  const promotion = selectNotNull(form1.promotion, form2.promotion);
  const normalQuantity = selectNotNull(
    form1.normalQuantity,
    form2.normalQuantity
  );
  const promotionQuantity = selectNotNull(
    form1.promotionQuantity,
    form2.promotionQuantity
  );
  return {
    ...form1,
    normalQuantity,
    promotionQuantity,
    promotion,
  };
}
