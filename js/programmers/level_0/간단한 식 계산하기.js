// Lv. 0 간단한 식 계산하기

/**
 * @param {string} binomial "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나
 * @returns {number} 주어진 식을 계산한 정수
 */

const solution = (binomial) => {
    return eval(binomial);
};

// test cases
console.log(solution("43 + 12")); // 55
console.log(solution("0 - 7777")); // -7777
console.log(solution("40000 * 40000")); // 1600000000
