// Lv. 2 JadenCase 문자열 만들기

/**
 *
 * @param {string} s
 * @returns {string}
 */

function solution(s) {
    return s
        .split(" ")
        .map(
            (word) =>
                word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
        )
        .join(" ");
}
