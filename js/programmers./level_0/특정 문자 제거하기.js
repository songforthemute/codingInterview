// Lv. 0 특정 문자 제거하기

/**
 * @param {string} my_string
 * @param {string} letter
 * @return {string}
 */

const solution = (my_string, letter) => {
    return my_string
        .split("")
        .filter((v) => v !== letter)
        .join("");
};
