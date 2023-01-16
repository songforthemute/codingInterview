// Lv. 2 연속 부분 수열 합의 개수

/**
 * @param {number[]} elements
 * @return {number}
 */

const solution = (elements) => {
    const set = new Set(elements);
    const circular = [...elements, ...elements];
    const sum = [...elements];

    for (let i = 1; i < sum.length; i++) {
        circular.slice(i, i + sum.length).forEach((val, idx) => {
            sum[idx] += val;
            set.add(sum[idx]);
        });
    }

    return set.size;
};
