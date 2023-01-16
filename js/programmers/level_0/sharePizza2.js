// Lv. 0 피자 나눠 먹기 (2)

/**
 * @param {number} n
 * @returns {number}
 */

const solution = (n) => {
    if (n % 6 === 0) return n / 6;

    if ((n * 2) % 6 === 0) {
        return (n * 2) / 6;
    } else if ((n * 3) % 6 === 0) {
        return (n * 3) / 6;
    } else {
        return n;
    }
};
