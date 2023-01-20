// Lv. 0 제곱수 판별하기

/**
 * @param {number} n
 * @returns {number}
 */

const solution = (n) => {
    return Number.isInteger(n ** 0.5) ? 1 : 2;
};
