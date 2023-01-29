// Lv. 3 최고의 집합

/**
 * @param {number} n
 * @param {number} s
 * @param {number[]}
 */

const solution = (n, s) => {
    if (n === 1 && s === 1) return [1];
    if (n > s) return [-1];

    let diff = s % n;
    const result = new Array(n).fill(Math.floor(s / n));

    while (diff > 0) {
        result[--diff]++;
    }

    return result.sort((a, b) => a - b);
};
