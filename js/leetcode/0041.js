// 41. First Missing Positive - Hard

/**
 * @param {number[]} nums
 * @return {number}
 */

var firstMissingPositive = function (nums) {
    nums = [...new Set(nums)].filter((v) => v > 0).sort((a, b) => a - b);

    if (nums[0] > 1) return 1;

    let p1 = 0;

    while (p1 < nums.length) {
        if (nums[p1] - nums[p1 + 1] >= -1) p1++;
        else return nums[p1] + 1;
    }

    return 1;
};

// TEST CASES
console.log(firstMissingPositive([1, 2, 0])); // 3
console.log(firstMissingPositive([3, 4, -1, 1])); // 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 1
