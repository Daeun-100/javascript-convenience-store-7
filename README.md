# javascript-convenience-store-precourse

## 편의점 저장소를 생성한다

- 목적: 결제 시스템 구현

> 출력

- ✅환영인사 출력
- 현재 재고 출력
- 재고 0개시 "재고 없음" 출력
- 영수증 출력

> 입력

- 구매할 상품과 수량 입력받음 ex.[사이다-2,감자탕-1]
- 프로모션 적용이 가능한 상품에 대해 해당 수량만큼 가져오지 않았을때, Y/N입력받음
- 일부 수량을 프로모션 없이 결제해야하는 경우 Y/N입력받음
- 멤버십 할인 Y/N입력받음
- 추가구매여부 Y/N입력받음

> 상품

- 현재 프로모션 재고를 확인한다
- 현재 일반 재고를 확인한다
- 재고수량으로 결제 가능여부 확인한다
- 프로모션 재고 수량으로 프로모션 적용 가능한지 확인한다
- 프로모션 시 프로모션 재고를 우선적으로 차감한다
- 상품을 구매하면 재고에서 차감한다
- 이벤트에 해당하는 수량보다 적게 가져왔는지 확인한다
  -> 각 product 객체, product를 모아둔 stock객체

> 프로모션

- 오늘이 기간내에 포함되는지 확인한다
- 몇개 구매시(1 or 2) 1개 무료증정인지 확인한다
  -> promotion객체, promotion을 모아둔 promotions 객체

> 멤버십 할인

- 프로모션 미적용 금액을 계산한다
- 프로모션 미적용 금액의 30%를 할인한다
- 최대한도는 8000 이다.
  -> 할인을 적용하는 discount 객체
  > 영수증
- 구매 상품 내역을 확인한다
- 증정 상품 내역을 확인한다
- 금액정보를 확인한다
  - 총구매액
  - 행사 할인
  - 멤버십 할인
  - 내실돈

> validate

- 상품/수량 형식이 올바르지 않은경우
- 존재하지 않는 상품을 입력한경우
- 구매수량이 재고 수량을 초과한 경우
- 기타 잘못된 입력

- 영수증 출력
  - 구매상품내역
  - 증정상품내역
  - 금액정보

-총 구매액 : 가격 \* 수량 에 프로모션/멤버쉽 할인 진행

- 영수증 풀력
- 추가구매 진행/종료 선택
- 잘못된 값 입력시 에러발생
- 해당 지점부터 다시 입력받음
