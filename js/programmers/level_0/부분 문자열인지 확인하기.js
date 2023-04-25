// Lv. 0 부분 문자열인지 확인하기

/**
 * @param {string} my_string 문자열1
 * @param {string} target 문자열2
 * @returns {number} target이 문자열 my_string의 부분 문자열이라면 1을, 아니라면 0
 */

const solution = (my_string, target) => {
    return Number(my_string.includes(target));
};

// test cases
console.log(solution("banana", "ana")); // 1
console.log(solution("banana", "wxyz")); // 0
