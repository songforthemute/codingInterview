// Lv. 1 음양 더하기

/**
 *
 * @param {number[]} abs
 * @param {boolean[]} signs
 * @returns {number}
 */

function solution(abs, signs) {
    let result = 0;

    for (let i = 0; i < abs.length; i++) {
        if (signs[i]) result += abs[i];
        else result -= abs[i];
    }

    return result;
}
