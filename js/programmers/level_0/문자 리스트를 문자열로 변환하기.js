// Lv. 0 문자열 리스트를 문자열로 변환하기

/**
 * @param {string[]} arr 문자들이 담겨있는 배열
 * @returns {string} `arr`의 원소들을 순서대로 이어 붙인 문자열
 */

const solution = (arr) => {
    return arr.join("");
};

// test cases
console.log(solution(["a", "b", "c"])); // abc
