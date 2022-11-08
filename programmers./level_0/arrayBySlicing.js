// Lv. 0 잘라서 배열로 저장하기

/**
 * @param {string} my_str
 * @param {number} n
 * @returns {string[]}
 */

const solution = (my_str, n) => {
    const arr = [];
    let str = "";

    for (const char of my_str) {
        str += char;

        if (str.length === n) {
            arr.push(str);
            str = "";
        }
    }

    if (str.length > 0) arr.push(str);

    return arr;
};
