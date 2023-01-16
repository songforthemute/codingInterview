// Lv. 1 가장 가까운 같은 글자

/**
 * @param {string} s
 * @return {number[]}
 */

const solution = (s) => {
    if (s.length === 1) return [-1];

    const result = [];
    const record = {};

    for (let i = 0; i < s.length; i++) {
        let n = record[s[i]] === undefined ? -1 : i - record[s[i]];

        result.push(n);
        record[s[i]] = i;
    }

    return result;
};
