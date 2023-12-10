// 27. Remove Element - Easy

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let last = nums.length - 1;
    let i = 0;

    while (i < nums.length) {
        if (nums[i] === val) {
            swap(nums, i, last);
            nums.pop();
            last = nums.length - 1;
        } else {
            i++;
        }

        if (i > last || !nums.length) break;
    }
};

function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

// TEST CASES
console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
