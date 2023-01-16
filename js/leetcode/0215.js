// 215. Kth Largest Element in an Array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const findKthLargest = (nums, k) => {
    return nums.sort((a, b) => b - a)[k - 1];
};
