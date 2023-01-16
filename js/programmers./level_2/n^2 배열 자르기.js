// Lv. 2 n^2 배열 자르기

/**
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

const solution = (n, left, right) => {
    const arr = [];
    const start = Math.floor(left / n);
    const end = Math.floor((right + 1) / n);

    for (let i = start; i <= end; i++) {
        Array(n)
            .fill(null)
            .map((_, idx) => (idx < i + 1 ? i + 1 : idx + 1))
            .forEach((v) => arr.push(v));
    }

    return arr.slice(left % n, right - left + (left % n) + 1);
};
