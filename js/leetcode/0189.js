// 189. Rotate Array - Medium

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
    const { length: len } = nums;
    const count = k < len ? k : k % len; // for optimization

    if (count) {
        const reverse = (left, right) => {
            // swap from left to right in the interval
            while (left < right) {
                [nums[left], nums[right]] = [nums[right], nums[left]]; // swap
                left++, right--;
            }
        };

        // [1, 2, 3, 4, 5] => [5, 4, 3, 2, 1] => [3, 4, 5, 2, 1] => [3, 4, 5, 1, 2]
        reverse(0, len - 1); // reverse total
        reverse(0, count - 1); // reverse 0 to count - 1
        reverse(count, len - 1); // reverse count to end
    }
};
