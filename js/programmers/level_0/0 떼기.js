// Lv. 0 0떼기

/**
 * @param {string} n_str 정수로 이루어진 문자열
 * @returns {string} n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열
 */

const solution = (n_str) => {
    return n_str.slice([...n_str].findIndex((v) => v !== "0"));
};

// test cases
console.log(solution("0010")); // 10
console.log(solution("854020")); // 854020
