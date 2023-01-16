// Lv. 1 자릿수 더하기

/**
 *
 * @param {number} n
 * @returns {number}
 */

function solution(n) {
    let result = 0;

    for (const char of String(n)) result += Number(char);

    return result;
}
