// Lv. 0 두 수의 연산값 비교하기

/**
 * @param {number} a 양의 정수1
 * @param {number} b 양의 정수2
 * @returns {number} 연산 결과 중 더 큰값을 반환
 */

const solution = (a, b) => {
    const alpha = Number(`${a}${b}`);
    const beta = 2 * a * b;
    return beta > alpha ? beta : alpha;
};

// test cases
console.log(solution(2, 91)); // 364
console.log(solution(91, 2)); // 912
