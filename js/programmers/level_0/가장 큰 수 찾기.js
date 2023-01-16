// Lv. 0 가장 큰 수 찾기

/**
 * @param {number[]} array
 * @returns {number[]}
 */

const solution = (array) => {
    return [Math.max(...array), array.indexOf(Math.max(...array))];
};
