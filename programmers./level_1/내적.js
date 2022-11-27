// Lv. 1 내적

/**
 *
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number}
 */

function solution(a, b) {
    let result = 0;

    for (let i = 0; i < a.length; i++) result += a[i] * b[i];

    return result;
}
