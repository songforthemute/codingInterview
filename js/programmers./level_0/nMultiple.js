// Lv. 0 n의 배수 고르기

/**
 * @param {number} n
 * @param {number[]} numlist
 * @returns {number[]}
 */

const solution = (n, numlist) => {
    return numlist.filter((v) => v % n === 0);
};
