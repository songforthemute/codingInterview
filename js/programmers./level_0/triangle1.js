// Lv. 0 삼각형의 완성조건 (1)

/**
 * @param {number[]} sides
 * @returns {number}
 */

const solution = (sides) => {
    return Math.max(...sides) * 2 -
        sides.reduce((prev, curr) => prev + curr, 0) <
        0
        ? 1
        : 2;
};
