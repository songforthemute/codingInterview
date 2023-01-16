// Lv. 0 주사위의 개수

/**
 * @param {number[]} box
 * @param {number} n
 * @returns {number}
 */

const solution = (box, n) => {
    let result = 1;

    result *= Math.floor(box[0] / n);
    result *= Math.floor(box[1] / n);
    result *= Math.floor(box[2] / n);

    return result;
};
