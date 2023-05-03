// Lv. 0 주사위 게임 2

/**
 * @param {number} a 주사위를 굴렸을 때 나온 숫자
 * @param {number} b 주사위를 굴렸을 때 나온 숫자
 * @param {number} c 주사위를 굴렸을 때 나온 숫자
 * @returns {number} 세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수
 */

const solution = (a, b, c) => {
    return a !== b && b !== c && a !== c
        ? a + b + c
        : a !== c || a !== b || b !== c
        ? (a + b + c) * (a ** 2 + b ** 2 + c ** 2)
        : (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
};

// test cases
console.log(solution(2, 6, 1)); // 9
console.log(solution(5, 3, 3)); // 473
console.log(solution(4, 4, 4)); // 110592
