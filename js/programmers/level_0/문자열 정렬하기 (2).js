// Lv. 0 문자열 정렬하기 (2)

/**
 * @param {string} my_string
 * @returns {string}
 */

const solution = (my_string) => {
    return my_string.toLowerCase().split("").sort().join("");
};
