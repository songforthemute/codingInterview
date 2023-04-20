// Lv. 0 문자열의 뒤의 n글자

/**
 * @param {string} my_string 문자열
 * @param {number} n 정수
 * @returns {number} `ineq`와 `eq`의 조건에 맞으면 1, 아니면 0
 */

const solution = (my_string, n) => {
    return my_string.slice(my_string.length - n);
};

// test cases
console.log(solution("ProgrammerS123", 11)); // "grammserS123"
console.log(solution("He110W0r1d", 5)); // "W0r1d"
