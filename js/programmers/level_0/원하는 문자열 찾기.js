// Lv. 0 원하는 문자열 찾기

/**
 * @param {string} myString 알파벳으로 이루어진 문자열1
 * @param {string} pat 알파벳으로 이루어진 문자열2
 * @returns {number} myString의 연속된 부분 문자열 중 pat이 존재하면 1을 그렇지 않으면 0
 */

const solution = (myString, pat) => {
    return Number(myString.toLowerCase().includes(pat.toLowerCase()));
};

// test cases
console.log(solution("AbCdEfG", "aBc")); // 1
console.log(solution("aaAA", "aaaaa")); // 0
