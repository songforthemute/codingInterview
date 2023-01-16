// Lv. 1 x만큼 간격이 있는 n개의 숫자

/**
 *
 * @param {number} x
 * @param {number} n
 * @returns {number[]}
 */

function solution(x, n) {
    const arr = [];

    for (let i = 1; i <= n; i++) arr.push(x * i);

    return arr;
}
