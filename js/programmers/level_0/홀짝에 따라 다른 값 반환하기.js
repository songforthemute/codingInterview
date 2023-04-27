// Lv. 0 홀짝에 따라 다른 값 반환하기

/**
 * @param {number} n 양의 정수
 * @returns {number} n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합
 */

const solution = (n) => {
    return Array(Math.ceil(n / 2))
        .fill(n)
        .map((v, i) => v - i * 2)
        .reduce((pre, cur) => pre + cur ** (n % 2 ? 1 : 2), 0);
};

// test cases
console.log(solution(7)); // 16
console.log(solution(10)); // 220
