// Lv. 3 거스름돈

/**
 * @param {number} n 거슬러 줘야 하는 금액
 * @param {number[]} money 현재 보유하고 있는 돈의 종류
 * @returns {number} n원을 거슬러 줄 방법의 수
 */

function solution(n, money) {
    // making $3 === making $1 + making $2
    const dp = Array(n + 1)
        .fill(0)
        .fill(1, 0, 1);

    money.forEach((currency) => {
        for (let i = currency; i <= n; i++) {
            dp[i] += dp[i - currency] % 1000000007;
        }
    });

    return dp[dp.length - 1];
}

// Test Cases
console.log(solution(5, [1, 2, 5]));
