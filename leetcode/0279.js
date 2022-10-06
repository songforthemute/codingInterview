// 279. Perfect Squares

/**
 * @param {number} n
 * @return {number}
 */

const numSquares = (n) => {
    const dp = new Array(n + 1).fill(0, 0, 1).fill(Infinity);

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j ** 2 <= i; j++) {
            if (i === j ** 2) dp[i] = 1;
            else dp[i] = Math.min(dp[i], dp[i - j ** 2] + 1);
        }
    }

    return dp[n];
};
