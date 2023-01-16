// Lv. 0 369게임

/**
 * @param {number} order
 * @returns {number}
 */

const solution = (order) => {
    return `${order}`.split("").filter((v) => v != 0 && v % 3 === 0).length;
};
