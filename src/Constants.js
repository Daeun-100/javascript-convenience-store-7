export const PRODUCT_FORM = {
  name: null,
  price: null,
  normalQuantity: 0,
  promotionQuantity: 0,
  promotion: null,
};

export const INPUT_MESSAGE = {
  order: "구매하실 상품명과 수량을 입력해 주세요. (예: [사이다-2],[감자칩-1])",
  getFree(product) {
    return `현재 ${product} 는 1개를 무료로 더 받을 수 있습니다. 추가하시겠습니까? (Y/N)`;
  },
  noBenefit(product, count) {
    return `현재 ${product} ${count}개는 1개는 프로모션 할인이 적용되지 않스비다. 그래도 구매하시겠습니까? (Y/N)`;
  },
  membership: "멤버십 할인을 받으시겠습니까? (Y/N)",
  replay: "감사합니다. 구매하고 싶은 다른 상품이 있나요? (Y/N)",
};
