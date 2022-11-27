// Lv. 2 멀리 뛰기

/**
 * @param {number} n
 * @returns {number}
 */

function solution(n) {
    const dp = new Array(n + 1);

    for (let i = 0; i < dp.length; i++) {
        if (i <= 3) dp[i] = i;
        else dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
    }

    return dp[n];
}
