// Lv. 0 공배수

/**
 * @param {number} number 정수
 * @param {number} n 배수1
 * @param {number} m 배수2
 * @returns {number} `n`과 `m`의 배수라면 1, 아니라면 0
 */

const solution = (number, n, m) => {
    return Number(number % n === 0 && number % m === 0);
};

// test cases
console.log(solution(60, 2, 3)); // 1
console.log(solution(55, 10, 5)); // 0
