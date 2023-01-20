// Lv. 0 연속된 수의 합

/**
 * @param {number} num
 * @param {number} total
 * @return {number[]}
 */

const solution = (num, total) => {
    const median = total / num;

    return Array(num)
        .fill(median)
        .map((v, i) => Math.round(v + i) - Math.floor(num / 2));
};
