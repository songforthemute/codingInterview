// Lv. 0 문자 반복 출력하기

/**
 * @param {string} my_string
 * @param {number} n
 * @return {string}
 */

const solution = (my_string, n) => {
    return my_string
        .split("")
        .map((v) => v.repeat(n))
        .join("");
};
