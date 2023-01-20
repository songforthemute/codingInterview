// Lv. 0 짝수의 합

/**
 * @param {number} n
 * @returns {number}
 */

function solution(n) {
    let result = 0;
    let i = 2;

    while (i <= n) {
        result += i;

        i += 2;
    }

    return result;
}
