// Lv. 0 양꼬치

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

const solution = (n, k) => {
    return n * 12000 + (k - Math.floor(n / 10)) * 2000;
};
