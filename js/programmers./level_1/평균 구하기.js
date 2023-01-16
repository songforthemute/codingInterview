// Lv. 1 평균 구하기

/**
 *
 * @param {number[]} arr
 * @returns {number}
 */

function solution(arr) {
    return arr.reduce((prev, cur) => prev + cur, 0) / arr.length;
}
