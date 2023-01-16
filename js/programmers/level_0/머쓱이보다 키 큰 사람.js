// Lv. 0 머쓱이보다 키 큰 사람

/**
 * @param {number[]} array
 * @param {number} height
 * @return {number}
 */

const solution = (array, height) => {
    return array.filter((v) => v > height).length;
};
