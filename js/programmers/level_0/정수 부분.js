// Lv. 0 정수 부분

/**
 * @param {number} flo 실수
 * @returns {number} `flo`의 정수 부분
 */

const solution = (flo) => {
    return Math.trunc(flo);
};

// test cases
console.log(solution(1.42)); // 1
console.log(solution(69.32)); // 69
