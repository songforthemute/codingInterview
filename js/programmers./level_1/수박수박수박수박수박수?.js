// Lv. 1 수박수박수박수박수박수?

/**
 *
 * @param {number} n
 * @returns {string}
 */

function solution(n) {
    if (n === 1) return "수";

    let result = "";
    if (n % 2 === 1) {
        for (let i = 1; i < Math.round(n / 2); i++) result += "수박";
        result += "수";
    } else {
        for (let i = 0; i < n / 2; i++) result += "수박";
    }

    return result;
}
