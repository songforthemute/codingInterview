// Lv. 0 A 강조하기

/**
 * @param {string} my_string 문자열1
 * @param {string} is_suffix 문자열2
 * @returns {number} is_suffix가 my_string의 접미사라면 1을, 아니면 0
 */

const solution = (my_string, is_suffix) => {
    return Number(my_string.endsWith(is_suffix));
};

// test cases
console.log(solution("banana", "ana")); // 1
console.log(solution("banana", "nan")); // 0
console.log(solution("banana", "wxyz")); // 0
console.log(solution("banana", "abanana")); // 0
