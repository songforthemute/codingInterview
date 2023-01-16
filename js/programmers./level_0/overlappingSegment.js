// Lv. 0 겹치는 선분의 길이

/**
 * @param {number[][]} lines
 * @returns {number}
 */

const solution = (lines) => {
    const obj = {};

    for (const line of lines) {
        for (let i = Math.min(...line); i < Math.max(...line); i++) {
            if (!obj[i]) obj[i] = 1;
            else obj[i]++;
        }
    }

    return Object.values(obj).filter((v) => v >= 2).length;
};
