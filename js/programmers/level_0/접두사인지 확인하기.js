// Lv. 0 접두사인지 확인하기

/**
 * @param {string} my_string 문자열
 * @param {string} is_prefix 문자열
 * @returns {number} is_prefix가 my_string의 접두사라면 1을, 아니면 0
 */

const solution = (my_string, is_prefix) => {
    return +my_string.startsWith(is_prefix);
};

// test cases
console.log(solution("banana", "ban")); // 1
console.log(solution("banana", "nan")); // 0
console.log(solution("banana", "abcd")); // 0
console.log(solution("banana", "bananan")); // 0
