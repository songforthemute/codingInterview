// Lv. 0 중앙값 구하기

/**
 * @param {number[]} array
 * @return {number}
 */

const solution = (array) => {
    return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
};
