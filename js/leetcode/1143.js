// 1143. Longest Common Subsequence

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

// dp || kmp 알고리즘
var longestCommonSubsequence = function (text1, text2) {
    // n * m 배열 초기화
    const dp = Array.from(Array(text1.length + 1), () =>
        Array(text2.length + 1).fill(null)
    );

    // n * m으로 루프 순회
    for (let i = 0; i < text1.length; i++) {
        for (let j = 0; j < text2.length; j++) {
            // 일치하면 좌상단 값 + 1
            if (text1[i] === text2[j]) {
                dp[i + 1][j + 1] = dp[i][j] + 1;
            }
            // 불일치하면 좌측값 or 상단값 중 최댓값을 가져옴
            else {
                dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
            }
        }
    }

    return dp[text1.length][text2.length];
};
