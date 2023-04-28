// Lv. 0 특정한 문자를 대문자로 바꾸기.js

/**
 * @param {string} my_string 영소문자로 이루어진 문자열
 * @param {string} alp 영소문자 1글자로 이루어진 문자열
 * @returns {string} my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열
 */

const solution = (my_string, alp) => {
    return [...my_string]
        .map((v) => (v === alp ? v.toUpperCase() : v))
        .join("");
};

// test cases
console.log(solution("programmers", "p")); // "Programmers"
console.log(solution("lowercase", "x")); // "lowercase"
