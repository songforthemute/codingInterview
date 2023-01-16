// Lv. 1 나누어 떨어지는 숫자 배열

/**
 *
 * @param {number[]} arr
 * @param {number} divisor
 * @returns {number[]}
 */

function solution(arr, divisor) {
    let result = arr.filter((e) => e % divisor === 0);

    return result.length !== 0 ? result.sort((a, b) => a - b) : [-1];
}
