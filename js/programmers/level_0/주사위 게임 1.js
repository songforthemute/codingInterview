// Lv. 0 주사위 게임 1

/**
 * @param {number} a 주사위를 굴렸을 때 나온 숫자1
 * @param {number} b 주사위를 굴렸을 때 나온 숫자2
 * @returns {number} 모두 홀수라면 a^2 + b^2, 하나만 홀수라면 2 * (a + b), 둘 다 짝수라면 |a - b|
 */

const solution = (a, b) => {
    if (a % 2 !== 0 && b % 2 !== 0) return a ** 2 + b ** 2;
    else if (a % 2 === 0 && b % 2 === 0) return Math.abs(a - b);
    else return 2 * (a + b);
};

// test cases
console.log(solution(3, 5)); // 34
console.log(solution(6, 1)); // 14
console.log(solution(2, 4)); // 2
