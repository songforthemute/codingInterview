// Lv. 0 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기

/**
 * @param {string} myString 문자열
 * @param {string} pat 문자열
 * @returns {string} myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열
 */

const solution = (myString, pat) => {
    console.log(myString.slice(0, myString.lastIndexOf(pat) + pat.length));
};

// test cases
console.log(solution("AbCdEFG", "dE")); // "AbCdE"
