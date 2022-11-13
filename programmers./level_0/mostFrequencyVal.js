// Lv. 0 최빈값 구하기

/**
 * @param {number[]} array
 * @return {number}
 */

const solution = (array) => {
    if (array.length === 1) return array[0];

    const freq = {};

    for (const elem of array) {
        freq[elem] ? freq[elem]++ : (freq[elem] = 1);
    }

    const max = Math.max(...Object.values(freq));
    const result = Object.keys(freq).filter((v) => freq[v] === max);

    return result.length > 1 ? -1 : Number(result[0]);
};
