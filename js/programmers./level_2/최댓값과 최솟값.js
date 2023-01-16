// Lv. 2 최댓값과 최솟값

/**
 *
 * @param {string} s
 * @returns {string}
 */

function solution(s) {
    const nums = s.split(" ").map((e) => parseInt(e));

    return `${Math.min(...nums)} ${Math.max(...nums)}`;
}
