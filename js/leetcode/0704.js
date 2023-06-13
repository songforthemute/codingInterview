// 704. Binary Search - Easy

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
    let [left, right] = [0, nums.length - 1]; // binary search by using two pointer

    while (left <= right) {
        const median = Math.floor((left + right) / 2);
        const val = nums[median];

        // find the target
        if (val === target) return median;
        // larger than target
        else if (val > target) right = median - 1;
        // smaller than target
        else left = median + 1;
    }

    return -1;
};
