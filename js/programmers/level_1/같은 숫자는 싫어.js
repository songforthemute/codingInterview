// Lv. 1 같은 숫자는 싫어

/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */

function solution(arr) {
    if (!arr.length) return [];

    return arr.filter((value, i) => value !== arr[i + 1]);
}
