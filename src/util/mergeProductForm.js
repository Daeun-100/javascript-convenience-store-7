import selectNotNull from "./selectNotNull.js";
import selectNotZero from "./selectNotZero.js";
export default function mergeProductForm(form1, form2) {
  const promotion = selectNotNull(form1.promotion, form2.promotion);
  const normalQuantity = selectNotZero(
    form1.normalQuantity,
    form2.normalQuantity
  );
  const promotionQuantity = selectNotZero(
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
