// Lv. 1 약수의 개수와 덧셈

/**
 *
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */

function solution(left, right) {
    let result = 0;
    let current = left;

    while (current <= right) {
        if (Number.isInteger(Math.sqrt(current))) result -= current;
        else result += current;
        current++;
    }

    return result;
}
