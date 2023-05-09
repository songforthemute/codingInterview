// Lv. 0 ad 제거하기

/**
 * @param {string[]} strArr 문자열 배열
 * @returns {string[]} 배열 내의 문자열 중 "ad"라는 부분 문자열을 포함하고 있는 모든 문자열을 제거하고 남은 문자열을 순서를 유지한 배열
 */

const solution = (strArr) => {
    return strArr.filter((v) => !v.includes("ad"));
};

// test cases
console.log(solution(["and", "notad", "abcd"])); // ["and","abcd"]
console.log(solution(["there", "are", "no", "a", "ds"])); // ["there","are","no","a","ds"]
