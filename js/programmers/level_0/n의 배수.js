// Lv. 0 n의 배수

/**
 * @param {number} num 정수1
 * @param {number} n 정수2
 * @returns {number} `num`이 `n`의 배수이면 1, 아니면 0
 */

const solution = (num, n) => {
    return Number(num % n === 0);
};

// test cases
console.log(solution(98, 2)); // 1
console.log(solution(34, 3)); // 0
