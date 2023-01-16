// Lv. 0 k의 개수

/**
 * @param {number} i
 * @param {number} j
 * @param {number} k
 * @returns {number}
 */

const solution = (i, j, k) => {
    let str = "";

    for (let start = i; start <= j; start++) {
        str += start;
    }

    return str.split("").filter((v) => v === String(k)).length;
};
