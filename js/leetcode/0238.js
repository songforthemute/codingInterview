// 238. Product of Array Except Self - Medium

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function (nums) {
    const left = [];
    let accumulation = 1;

    // multiple to right from left direction
    // multiple left side to current index
    for (let i = 0; i < nums.length; i++) {
        left[i] = accumulation;
        accumulation *= nums[i];
    }

    const right = [];
    accumulation = 1;

    // multiple to left from left direction
    // multiple right side to current index
    for (let i = nums.length - 1; i >= 0; i--) {
        right[i] = accumulation;
        accumulation *= nums[i];
        right[i] *= left[i];
    }

    return right;
};
