// 34. Find First and Last Position of Element in Sorted Array - Medium

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function (nums, target) {
    if (!nums.length) return [-1, -1];
    if (target < nums[0] || nums[nums.length - 1] < target) return [-1, -1];

    let [left, right] = [0, nums.length - 1];

    // binary search
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // find valid range
        if (nums[mid] === target) {
            // adjust both sides to find range
            while (nums[left] !== target) left++;
            while (nums[right] !== target) right--;

            return [left, right];
        }

        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return [-1, -1];
};
