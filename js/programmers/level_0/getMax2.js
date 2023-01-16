// Lv. 0 최댓값 만들기 (2)

/**
 * @param {number[]} numbers
 * @returns {number}
 */

const solution = (numbers) => {
    let sorted = numbers.sort((a, b) => a - b);

    return Math.max(
        sorted[0] * sorted[1],
        sorted[sorted.length - 1] * sorted[sorted.length - 2]
    );
};
