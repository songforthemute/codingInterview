// Lv. 1 부족한 금액 계산하기

/**
 *
 * @param {number} price
 * @param {number} money
 * @param {number} count
 * @returns {number}
 */

function solution(price, money, count) {
    let totalCost = 0;

    for (let i = 1; i <= count; i++) totalCost += i * price;

    return money >= totalCost ? 0 : totalCost - money;
}
