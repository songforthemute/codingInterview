// Lv. 0 최댓값 만들기 (1)

/**
 * @param {number[]} numbers
 * @returns {number}
 */

const solution = (numbers) => {
    return numbers
        .sort((a, b) => b - a)
        .slice(0, 2)
        .reduce((prev, curr) => prev * curr, 1);
};
