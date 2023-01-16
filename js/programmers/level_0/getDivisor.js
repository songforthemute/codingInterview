// Lv. 0 약수 구하기

/**
 * @param {number} n
 * @returns {number[]}
 */

const solution = (n) => {
    const arr = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) arr.push(i);
    }

    return arr;
};
