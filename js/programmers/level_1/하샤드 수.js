// Lv. 1 하샤드 수

/**
 *
 * @param {number} arr
 * @returns {boolean}
 */

function solution(arr) {
    let divider = 0;
    const num = String(arr);

    for (let i = 0; i < num.length; i++) divider += Number(num[i]);

    return arr % divider === 0 ? true : false;
}
