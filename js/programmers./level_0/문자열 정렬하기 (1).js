// Lv. 0 문자열 정렬하기 (1)

/**
 * @param {string} my_string
 * @returns {number[]}
 */

const solution = (my_string) => {
    return my_string
        .split("")
        .filter((v) => v == Number(v))
        .map((v) => Number(v))
        .sort();
};
