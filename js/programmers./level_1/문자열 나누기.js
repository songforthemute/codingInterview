// Lv. 1 문자열 나누기

/**
 * @param {string} s
 * @return {number}
 */

const solution = (s) => {
    let result = 0;
    let targetChar = "";
    let targetCnt = 0;
    let otherCnt = 0;

    for (const char of s) {
        if (targetCnt === 0) {
            targetChar = char;
            targetCnt++;
            continue;
        }

        if (char === targetChar) {
            targetCnt++;
        } else {
            otherCnt++;
        }

        if (targetCnt === otherCnt) {
            result++;
            targetChar = "";
            targetCnt = 0;
            otherCnt = 0;
        }
    }

    if (targetChar.length > 0) result++;

    return result;
};
