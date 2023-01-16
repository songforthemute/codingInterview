// Lv. 0 개미 군단

/**
 * @param {number} hp
 * @returns {number}
 */

const solution = (hp) => {
    return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
};
