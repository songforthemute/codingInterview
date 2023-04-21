// Lv. 0 대문자로 바꾸기

/**
 * @param {string} myString 알파벳으로 이루어진 문자열
 * @returns {string} 모든 알파벳을 대문자로 변환한 문자열
 */

const solution = (myString) => {
    return myString.toUpperCase();
};

// test cases
console.log(solution("aBcDeFg")); // "ABCDEFG"
console.log(solution("AAA")); // "AAA"
