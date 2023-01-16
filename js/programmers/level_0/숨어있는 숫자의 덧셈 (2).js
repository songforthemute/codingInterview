// Lv. 0 숨어있는 숫자의 덧셈 (2)

/**
 * @param {string} my_string
 * @returns {number}
 */

const solution = (my_string) => {
    const nums = [];
    let temp = "";
    let i = 0;

    while (temp.length > 0 || my_string[i]) {
        if (Number(my_string[i]) >= 0) {
            temp += my_string[i];
        } else {
            if (temp.length > 0) {
                nums.push(temp);
                temp = "";
            }
        }

        i++;
    }

    return nums.length > 0
        ? nums.reduce((prev, curr) => prev + Number(curr), 0)
        : 0;
};
