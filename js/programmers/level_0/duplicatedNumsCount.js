// Lv. 0 중복된 숫자 개수

/**
 * @param {number[]} array
 * @param {number} number
 * @return {number}
 */

const solution = (array, n) => {
    return array.filter((v) => v === n).length;
};
