// 139. Word Break - Medium

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordBreak = function (s, wordDict) {
    if (!wordDict.length) return false;

    // hashing the wordDict
    const hash = new Map();
    wordDict.forEach((word) => hash.set(word, true));

    // init dp array
    const dp = Array(s.length + 1)
        .fill(false)
        .fill(true, 0, 1);

    // around the word by using two pointers
    // choose the right first, then adjust the left and check word
    for (let right = 1; right <= s.length; right++) {
        for (let left = 0; left < right; left++) {
            const current = s.slice(left, right);
            // check whether exist the word in hash
            // dp[left] === true: the front interval of current sliced word is registered already
            if (hash.has(current) && dp[left]) {
                dp[right] = true;
                break;
            }
        }
    }

    return dp[s.length];
};
