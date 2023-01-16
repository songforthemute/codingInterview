// Lv. 1 나머지가 1이 되는 수 찾기

/**
 *
 * @param {number} n
 * @returns {number}
 */

function solution(n) {
    let result = 2;

    while (result !== n) {
        if (n % result == 1) return result;
        result++;
    }
}
