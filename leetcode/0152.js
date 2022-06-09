// 152. Maximum Product Subarray
const maxProduct = (nums) => {
    if (nums.length === 1) return nums[0];

    let prevMax = nums[0],
        prevMin = nums[0],
        result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const tempMax = Math.max(nums[i] * prevMax, nums[i] * prevMin, nums[i]);
        const tempMin = Math.min(nums[i] * prevMax, nums[i] * prevMin, nums[i]);

        prevMax = tempMax;
        prevMin = tempMin;

        if (result < prevMax) result = prevMax;
    }

    return result;
};
