// Lv. 0 문자열의 앞의 n글자

/**
 * @param {string} my_string 문자열
 * @param {number} n 정수
 * @returns {number} `my_string`의 앞의 `n`글자로 이루어진 문자열
 */

const solution = (my_string, n) => {
    return my_string.slice(0, n);
};

// test cases
console.log(solution("ProgrammerS123", 11)); // ProgrammerS
console.log(solution("He110W0r1d", 5)); // He110
