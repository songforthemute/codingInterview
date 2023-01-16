// Lv. 1 문자열 다루기 기본

/**
 *
 * @param {string} s
 * @returns {boolean}
 */

function solution(s) {
    if (s.length !== 4 && s.length !== 6) return false;
    if (s.match(/[a-zA-Z]/) !== null) return false;
    return true;
}
