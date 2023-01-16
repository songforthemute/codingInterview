// Lv. 0 한 번만 등장한 문자

/**
 * @param {string} s
 * @returns {string}
 */

const solution = (s) => {
    const obj = {};
    let result = [];

    for (const char of s) {
        if (!obj[char]) obj[char] = 1;
        else obj[char]++;
    }

    for (const key in obj) {
        if (obj[key] === 1) result.push(key);
    }

    return result.sort().join("");
};
