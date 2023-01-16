// Lv. 0 2차원으로 만들기

/**
 * @param {number[]} num_list
 * @param {number} new
 * @returns {number[][]}
 */

const solution = (num_list, n) => {
    const result = [];
    let temp = [];

    for (const num of num_list) {
        temp.push(num);

        if (temp.length === n) {
            result.push(temp);
            temp = [];
        }
    }

    return result;
};
