// Lv. 0 가까운 수

/**
 * @param {number[]} array
 * @param {number} n
 * @returns {number}
 */

const solution = (array, n) => {
    let min = Infinity;

    for (let i = 0; i < array.length; i++) {
        if (Math.abs(min - n) > Math.abs(array[i] - n)) {
            min = array[i];
        } else if (Math.abs(min - n) === Math.abs(array[i] - n)) {
            min = Math.min(min, array[i]);
        }
    }

    return min;
};
