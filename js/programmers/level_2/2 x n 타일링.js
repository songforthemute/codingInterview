// Lv. 2 2 x n 타일링

/**
 * @param {number} n 가로의 길이
 * @returns {number} 직사각형을 채우는 방법의 수
 */

const solution = (n) => {
    // JS: 1, 2의 경우를 예외처리 시, 효율성 탈락 가능성 존재

    const dp = new Array(n + 1);
    const divide = (number1, number2 = 0) => (number1 + number2) % 1000000007;

    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i < dp.length; i++) {
        dp[i] = divide(dp[i - 1], dp[i - 2]);
    }

    return divide(dp[dp.length - 1]);
};

// 테스트케이스
console.log(solution(4)); // 5
console.log(solution(5)); // 8
