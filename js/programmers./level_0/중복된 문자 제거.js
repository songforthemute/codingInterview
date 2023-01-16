// Lv. 0 중복된 문자 제거

/**
 * @param {string} my_string
 * @returns {string}
 */

const solution = (my_string) => {
    return [...new Set([...my_string])].join("");
};
