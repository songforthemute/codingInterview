// 53. Maximum Subarray
const maxSubArray = (nums) => {
    if (nums.length === 1) return nums[0];

    let prev = 0;
    let max = -Infinity;

    for (const n of nums) {
        prev = Math.max(prev + n, n);
        max = Math.max(max, prev);
    }

    return max;
};
