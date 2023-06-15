// 33. Search in Rotated Sorted Array - Medium

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
    if (nums.length === 1) return nums[0] === target ? 0 : -1;
    if (target < nums[0] && nums[nums.lenght - 1] < target) return -1;

    let [left, right] = [0, nums.length - 1];

    // loop for binary search
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const val = nums[mid];

        if (val === target) return mid;

        /**
         * Restraint array for target tracing
         *
         * e.g. nums = [3,4,5,6,7,1,2], target = 7
         *  So, left(3), right(2), mid(6)
         *      left < mid && left < target && mid < target
         *  So, re-adjust left pointer
         */

        // if the left side
        if (nums[left] <= val) {
            // left <= `target` <= median <= right
            if (nums[left] <= target && target <= val) right = mid - 1;
            // re-adjust the section
            else left = mid + 1;
        }
        // if the right side
        else {
            // left <= median <= `target` <= right
            if (val <= target && target <= nums[right]) left = mid + 1;
            // re-adjust the section
            else right = mid - 1;
        }
    }

    return -1;
};
