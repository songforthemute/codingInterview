// Lv. 0 순서쌍의 개수

/**
 * @param {number} n
 * @returns {number}
 */

const solution = (n) => {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) count++;
    }

    return count;
};
