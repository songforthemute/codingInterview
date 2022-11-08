// Lv. 0 문자열 안에 문자열

/**
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */

const solution = (str1, str2) => {
    return str1.includes(str2) ? 1 : 2;
};
