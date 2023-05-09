// Lv. 0 x 사이의 개수

/**
 * @param {string} myString 문자열
 * @returns {number[]} 문자 "x"를 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열
 */

const solution = (myString) => {
    return myString.split("x").map((v) => v.length);
};

// test cases
console.log(solution("oxooxoxxox")); // [1, 2, 1, 0, 1, 0]
console.log(solution("xabcxdefxghi")); // [0, 3, 3, 3]
