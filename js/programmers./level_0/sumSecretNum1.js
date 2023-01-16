// Lv. 0 숨어있는 숫자의 덧셈 (1)

/**
 * @param {string} my_string
 * @returns {number}
 */

const solution = (my_string) => {
    let sum = 0;

    for (const char of my_string) {
        if (char == Number(char)) {
            sum += Number(char);
        }
    }

    return sum;
};
