// Lv. 0 배열 자르기

/**
 * @param {number[]} numbers
 * @param {number} num1
 * @param {number} num2
 * @returns {number[]}
 */

function solution(numbers, num1, num2) {
    return numbers.slice(num1, num2 + 1);
}
