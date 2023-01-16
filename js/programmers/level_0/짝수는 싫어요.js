// Lv. 0 짝수는 싫어요

/**
 * @param {number} n
 * @returns {number[]}
 */

const solution = (n) => {
    const answer = [];
    let i = 1;

    while (i <= n) {
        answer.push(i);
        i += 2;
    }

    return answer;
};
