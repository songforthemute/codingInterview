// Lv. 0 세로 읽기

/**
 * @param {string} my_string 문자열
 * @param {number} m 정수
 * @param {number} c 정수
 * @returns {string} my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return
 */

const solution = (my_string, m, c) => {
    return [...my_string].filter((_, i) => i % m === c - 1).join("");
};

// test cases
console.log(solution("ihrhbakrfpndopljhygc", 4, 2)); // "happy"
console.log(solution("programmers", 1, 1)); // "programmers"
