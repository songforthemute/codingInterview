// Lv. 0 부분 문자열

/**
 * @param {string} str1 문자열1
 * @param {string} str2 문자열2
 * @returns {number} str1이 str2의 부분 문자열이라면 1, 아니라면 0
 */

const solution = (str1, str2) => {
    return Number(str2.includes(str1));
};

// test cases
console.log(solution("abc", "aabcc")); // 1
console.log(solution("tbt", "tbbttb")); // 0
