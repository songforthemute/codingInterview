// 75. Sort Colors - Medium

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function (nums) {
    let noSwap = true;

    for (let i = nums.length; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                noSwap = false;
            }
        }

        if (noSwap) break;
    }
};
