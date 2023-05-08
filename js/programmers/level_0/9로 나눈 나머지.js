// Lv. 0 9로 나눈 나머지

/**
 * @param {string} number 음이 아닌 정수 문자열
 * @returns {number} number를 9로 나눈 나머지
 */

const solution = (number) => {
    return [...number].reduce((pre, cur) => pre + Number(cur), 0) % 9;
};

// test cases
console.log(solution("123")); // 6
console.log(solution("78720646226947352489")); // 2
