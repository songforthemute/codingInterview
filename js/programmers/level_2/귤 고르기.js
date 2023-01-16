// Lv. 2 귤 고르기

/**
 * @param {number} k
 * @param {number} tangerine
 * @return {number}
 */

const solution = (k, tangerine) => {
    let result = 0;
    let reserve = k;

    const list = {};

    tangerine.forEach((v) => {
        list[v] ? list[v]++ : (list[v] = 1);
    });

    Object.values(list)
        .sort((a, b) => b - a)
        .forEach((v) => {
            if (reserve > 0) {
                reserve -= v;
                result++;
            }
        });

    return result;
};
