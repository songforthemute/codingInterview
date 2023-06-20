// 72. Edit Distance - Medium

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

var minDistance = function (word1, word2) {
    const [rows, cols] = [word1.length + 1, word2.length + 1];
    // init for the lavenshtein distance algorithm
    const dp = Array.from(Array(rows), () => Array(cols).fill(0));
    // init the vertical axis for standard
    for (let i = 0; i < rows; i++) dp[i][0] = i;
    // init the horizontal axis for standard
    for (let i = 0; i < cols; i++) dp[0][i] = i;

    /**
     * insert the char: i - 1, j(top) + 1
     * remove the char: i, j - 1(left) + 1
     * replace the char: i - 1, j - 1(diagonal) + 1
     * same the char: i - 1, j - 1(diagonal) + 0
     * get the minimum from above list
     */

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1, // insert the char
                dp[i][j - 1] + 1, // remove the char
                dp[i - 1][j - 1] + (word1[i - 1] === word2[j - 1] ? 0 : 1) // same or replace the char
            );
        }
    }

    return dp[rows - 1][cols - 1];
};
