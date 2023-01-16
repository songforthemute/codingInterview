// 198. House Robber
const rob = (nums) => {
    if (!nums.length) return 0;
    else if (nums.length === 1) return nums[0];
    else if (nums.length === 2) return Math.max(nums[0], nums[1]);

    let maxAtTwoBefore = nums[0];
    let maxAtOneBefore = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        const maxCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);

        maxAtTwoBefore = maxAtOneBefore;
        maxAtOneBefore = maxCurrent;
    }

    return Math.max(maxAtTwoBefore, maxAtOneBefore);
};
