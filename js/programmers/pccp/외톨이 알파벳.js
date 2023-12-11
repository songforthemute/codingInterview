// [PCCP 모의고사 #1] 외톨이 알파벳

/**
 * @param {string} input_string
 * @returns {string}
 */

function solution(input_string) {
    const dict = {};

    for (let i = 0; i < input_string.length; i++) {
        const char = input_string[i];
        if (dict[char]) {
            dict[char].push(i);
        } else {
            dict[char] = [i];
        }
    }

    const result = [];

    for (const char in dict) {
        if (dict[char].length === 1) continue;

        const start = dict[char][0];
        const len = dict[char].length;
        const end = dict[char][len - 1];

        if (end !== start + len - 1) {
            result.push(char);
        }
    }

    return result.length ? result.sort().join("") : "N";
}
