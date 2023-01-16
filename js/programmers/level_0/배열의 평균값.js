// Lv. 0 배열의 평균값

/**
 * @param {number[]} numbers
 * @returns {number}
 */

const solution = (numbers) => {
    return numbers.reduce((prev, curr) => prev + curr, 0) / numbers.length;
};
