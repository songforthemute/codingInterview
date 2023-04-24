// Lv. 0 flag에 따라 다른 값 변환하기

/**
 * @param {number} a 정수1
 * @param {number} b 정수2
 * @param {boolean} flag boolean 변수
 * @returns {number} `flag`가 true면 a + b, 아니라면 a - b
 */

const solution = (a, b, flag) => {
    return a + (flag ? b : -b);
};

// test cases
console.log(solution(-4, 7, true)); // 3
console.log(solution(-4, 7, false)); // -11
