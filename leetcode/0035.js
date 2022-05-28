// 35. Search Insert Position
const searchInsert = (nums, target) => {
    if (nums.length === 0 || nums[0] >= target) return 0;
    else if (nums[nums.length - 1] < target) return nums.length;

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const median = Math.floor((left + right) / 2);

        if (nums[median] === target) return median;
        else if (nums[median] < target) left = median;
        else if (nums[median] > target) right = median;

        if (right - left === 1) return right;
    }
};
