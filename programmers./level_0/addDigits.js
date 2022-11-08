// Lv. 0 자릿수 더하기

/**
 * @param {number} n
 * @returns {number}
 */

const solution = (n) => {
    let answer = 0;

    for (const char of String(n)) {
        answer += Number(char);
    }

    return answer;
};
