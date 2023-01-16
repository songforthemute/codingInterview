// Lv. 1 정수 제곱근 판별

/**
 *
 * @param {number} n
 * @returns {number}
 */

function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}
