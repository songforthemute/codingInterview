// Lv. 0 문자열 정수의 합

/**
 * @param {string} num_str 한 자리 정수로 이루어진 문자열
 * @returns {number} 각 자리수의 합
 */

const solution = (num_str) => {
    return [...num_str].reduceRight((pre, cur) => pre + +cur, 0);
};

// test cases
console.log(solution("123456789")); // 45
console.log(solution("1000000")); // 1
