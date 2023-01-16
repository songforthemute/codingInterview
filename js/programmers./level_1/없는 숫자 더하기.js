// Lv. 1 없는 숫자 더하기

/**
 *
 * @param {number[]} numbers
 * @returns {number}
 */

function solution(numbers) {
    return 45 - numbers.reduce((cur, prev) => prev + cur, 0);
}
