// Lv. 0 배열 회전시키기

/**
 * @param {number[]} numbers
 * @param {string} direction
 * @returns {number[]}
 */

const solution = (numbers, direction) => {
    return direction === "right"
        ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)]
        : [...numbers.slice(1), numbers[0]];
};
