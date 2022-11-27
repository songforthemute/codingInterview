// Lv. 1 두 정수 사이의 합

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

function solution(a, b) {
    if (a === b) return a;

    let min = Math.min(a, b);
    let max = Math.max(a, b);

    let temp = min - 1;
    max -= temp;

    return (max * (max + 1)) / 2 + temp * (Math.abs(a - b) + 1);
}
