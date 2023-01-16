// Lv. 0 인덱스 바꾸기

/**
 * @param {string} my_string
 * @param {number} num1
 * @param {number} num2
 * @returns {string}
 */

const solution = (my_string, num1, num2) => {
    let str = [...my_string];

    [str[num1], str[num2]] = [str[num2], str[num1]];

    return str.join("");
};
