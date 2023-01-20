// Lv. 0 배열의 유사도

/**
 * @param {string[]} s1
 * @param {string[]} s2
 * @returns {number}
 */

const solution = (s1, s2) => {
    return s1.length + s2.length - new Set([...s1, ...s2]).size;
};
