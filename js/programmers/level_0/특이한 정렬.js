// Lv. 0 특이한 정렬

/**
 * @param {number[]} numlist
 * @param {number} n
 * @return {number[]}
 */

const solution = (numlist, n) => {
    return numlist
        .map((v) => v - n)
        .sort((a, b) =>
            Math.abs(a) !== Math.abs(b) ? Math.abs(a) - Math.abs(b) : b - a
        )
        .map((v) => v + n);
};
