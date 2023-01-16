// Lv. 1 가운데 글자 가져오기

/**
 *
 * @param {string} s
 * @returns {string}
 */

function solution(s) {
    if (s.length % 2 !== 0) return s[(s.length - 1) / 2];
    else return s[s.length / 2 - 1] + s[s.length / 2];
}
