// Lv.4 올바른 괄호의 갯수

/**
 *
 * @param {number} n
 * @returns {number}
 */

function solution(n) {
    const dp = [1, 1, 2, 5];

    for (let i = 4; i < n + 1; i++) {
        dp[i] = 0;

        let j = 0,
            k = i - 1;

        // catalan number
        while (k >= 0) {
            dp[i] += dp[j++] * dp[k--];
        }
    }

    return dp[n];
}

// TEST CASES
console.log(solution(4)); // 14
