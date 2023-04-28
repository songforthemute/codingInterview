// Lv. 0 배열에서 문자열 대소문자 변환하기

/**
 * @param {string[]} strArr 문자열 배열
 * @returns {string[]} 배열에서 홀수번째 인덱스의 문자열은 모든 문자를 대문자로, 짝수번째 인덱스의 문자열은 모든 문자를 소문자로 바꿔서 반환
 */

const solution = (strArr) => {
    return strArr.map((v, i) => (i % 2 ? v.toUpperCase() : v.toLowerCase()));
};

// test cases
console.log(solution(["AAA", "BBB", "CCC", "DDD"])); // ["aaa","BBB","ccc","DDD"]
console.log(solution(["aBc", "AbC"])); // ["abc","ABC"]
