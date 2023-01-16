// Lv. 1 짝수와 홀수

/**
 *
 * @param {number} num
 * @returns {string}
 */

function solution(num) {
    if (num === 0) return "Even";
    return num % 2 === 0 ? "Even" : "Odd";
}
