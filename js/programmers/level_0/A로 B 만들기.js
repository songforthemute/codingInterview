// Lv. 0 A로 B 만들기

/**
 * @param {string} before
 * @param {string} after
 * @returns {number}
 */

const solution = (before, after) => {
    let obj = {};

    for (const char of before) {
        !obj[char] ? (obj[char] = 1) : obj[char]++;
    }

    for (const char of after) {
        if (obj[char] > 0) obj[char]--;
        else if (!obj[char] || obj[char] <= 0) return 0;
    }
    return 1;
};
