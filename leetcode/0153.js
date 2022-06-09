// 153. Find Minimum in Rotated Sorted Array
const findMin = (nums) => {
    return Math.min(...nums);
};

// const findMin = (nums) => {
//     let left = 0,
//         right = nums.length - 1;

//     while (left < right) {
//         const median = ~~((left + right) / 2); // ~~ === Math.floor()

//         if (nums[median] > nums[right]) left = median + 1;
//         else right = median;
//     }

//     return nums[left];
// };
