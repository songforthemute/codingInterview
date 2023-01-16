// Lv. 0 진료 순서 정하기

/**
 * @param {number[]} emergency
 * @returns {number[]}
 */

function solution(emergency) {
    const obj = {};

    [...emergency].sort((a, b) => b - a).forEach((v, i) => (obj[v] = i + 1));

    return emergency.map((v) => obj[v]);
}
