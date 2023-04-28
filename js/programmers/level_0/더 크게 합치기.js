// Lv. 0 더 크게 합치기

/**
 * @param {number} a 양의 정수1
 * @param {number} b 양의 정수2
 * @returns {number} 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값
 */

const solution = (a, b) => {
    return Math.max(`${a}${b}`, `${b}${a}`);
};

// test cases
console.log(solution(9, 91)); // 991
console.log(solution(89, 8)); // 898
