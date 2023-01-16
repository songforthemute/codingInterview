// Lv. 0 숫자 찾기

/**
 * @param {number} num
 * @param {number} k
 * @returns {number}
 */

const solution = (num, k) => {
    return [...`${num}`].includes(`${k}`)
        ? [...`${num}`].indexOf(`${k}`) + 1
        : -1;
};
