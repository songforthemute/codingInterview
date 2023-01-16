// Lv. 0 구슬을 나누는 경우의 수

/**
 * @param {number} balls
 * @param {number} share
 * @returns {number}
 */

const solution = (balls, share) => {
    if (balls === share) return 1;
    else if (balls - 1 === share) return balls;

    const dp = new Array(balls + 1);
    dp[1] = BigInt(1);

    for (let i = 2; i < dp.length; i++) {
        dp[i] = dp[i - 1] * BigInt(i);
    }

    return dp[balls] / (dp[balls - share] * dp[share]);
};
