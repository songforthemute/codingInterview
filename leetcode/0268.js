// 268. Missing Number

/**
 * @param {number[]} nums
 * @return {number}
 */

const missingNumber = (nums) => {
    const arr = new Array(nums.length + 1).fill(null);

    for (const n of nums) arr[n] = n;

    return arr.indexOf(null);
};
