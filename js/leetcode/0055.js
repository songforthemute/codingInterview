// 55. Jump Game - Medium

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function (nums) {
    let max = 0;

    // compare at each index
    for (let idx = 0; idx < nums.length; idx++) {
        max = Math.max(max, idx + nums[idx]);

        if (max >= nums.length - 1) return true;
        // max <= curr: cannot access current index
        // !nums[curr]: cannot progress anymore
        if (max <= idx && !nums[idx]) break;
    }

    return false;
};
