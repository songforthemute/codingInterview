// Lv. 1 시저 암호

/**
 *
 * @param {string} s
 * @param {number} n
 * @returns {string}
 */

function solution(s, n) {
    let answer = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") answer += " ";
        else if (
            (s[i].charCodeAt(0) <= 90 && s[i].charCodeAt(0) + n > 90) ||
            (s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) + n > 122)
        )
            answer += String.fromCharCode(s[i].charCodeAt(0) + n - 25 - 1);
        else answer += String.fromCharCode(s[i].charCodeAt(0) + n);
    }

    return answer;
}
