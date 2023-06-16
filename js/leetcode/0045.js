// 45. Jump Game II - Medium

/**
 * @param {number[]} nums
 * @return {number}
 */

var jump = function (nums) {
    const end = nums.length - 1;
    const dp = Array(nums.length).fill(Infinity).fill(0, 0, 1);

    for (let i = 0; i < end; i++) {
        for (let j = i + 1; j <= i + nums[i]; j++) {
            dp[j] = Math.min(dp[j], dp[i] + 1);
        }
    }

    return dp[end];
};
