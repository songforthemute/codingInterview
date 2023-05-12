// Lv. 0 간단한 논리 연산

/**
 * @param {boolean} x1 boolean 변수
 * @param {boolean} x2 boolean 변수
 * @param {boolean} x3 boolean 변수
 * @param {boolean} x4 boolean 변수
 * @returns {boolean} (x1 ∨ x2) ∧ (x3 ∨ x4) 식의 true/false를 return
 */

const solution = (x1, x2, x3, x4) => {
    return (x1 || x2) && (x3 || x4);
};

// test cases
console.log(solution(false, true, true, true)); // true
console.log(solution(true, false, false, false)); // false
