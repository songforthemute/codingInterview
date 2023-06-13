// 283. Move Zeroes - Easy

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
    if (nums.length === 1) return nums;

    // two pointers method
    let [n, zero] = [0, 0];

    while (n < nums.length) {
        // find non-zero index
        while (nums[n] === 0) n++;

        // if overflowed the valid range
        if (n >= nums.length) return nums;

        // replace from current index to where 0 index is stored
        for (let i = n; i > zero; i--) {
            [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
        }

        // adjust after the replacement
        n++, zero++;
    }

    return nums;
};
