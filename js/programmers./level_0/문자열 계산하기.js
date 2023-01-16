// Lv. 0 문자열 계산하기

/**
 * @param {string} my_string
 * @return {number}
 */

const solution = (my_string) => {
    let sum = 0;
    let sign = 1;

    for (const char of my_string.split(" ")) {
        if (char == Number(char)) {
            sum += sign * char;
            continue;
        }

        if (char === "+") {
            sign = 1;
            continue;
        }

        if (char === "-") {
            sign = -1;
        }
    }

    return sum;
};
