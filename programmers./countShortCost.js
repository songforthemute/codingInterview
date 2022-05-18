// 부족한 금액 계산하기
function solution(price, money, count) {
    let totalCost = 0;

    for (let i = 1; i <= count; i++) totalCost += i * price;

    return money >= totalCost ? 0 : totalCost - money;
}
