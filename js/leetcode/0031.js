// 31. Next Permutation

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const nextPermutation = function (nums) {
    const LENGTH = nums.length;
    const swap = (l, r) => {
        [nums[l], nums[r]] = [nums[r], nums[l]];
    };
    const reverse = (l) => {
        let r = nums.length - 1;

        while (l < r) {
            swap(l, r);
            l++, r--;
        }
    };

    /**
     * find right: bigger than left
     *      e.g. 1 | `2` | 5 | 4 | `3`
     * then swap each element
     *      e.g. 1 | 3 | 5 | 4 | 2
     * then invert from left + 1
     *      e.g. 1 | 3 | 2 | 4 | 5
     */

    for (let left = LENGTH - 2; left >= 0; left--) {
        for (let right = LENGTH - 1; right > left; right--) {
            if (nums[right] > nums[left]) {
                swap(left, right);
                reverse(left + 1);
                return;
            }
        }
    }

    // for all elements, no bigger elements than itself in right side of each element
    nums.reverse();
};

// test cases
console.log(nextPermutation([1, 2, 3])); // [1,3,2]
console.log(nextPermutation([3, 2, 1])); // [1,2,3]
console.log(nextPermutation([1, 1, 5])); // [1,5,1]
