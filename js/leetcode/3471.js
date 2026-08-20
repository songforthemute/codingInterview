// 3471. Find the Largest Almost Missing Integer

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
    const subarrays = [];

    for (let i = 0; i < nums.length - k + 1; i++) {
        const subarray = nums.slice(i, i + k);
        subarrays.push(subarray);
    }


    let maxAlmostMissingInteger = -1;

    for (const num of nums) {
        const appearCount = subarrays.reduce((count, subarray) => (
            subarray.includes(num) ? count + 1 : count
        ), 0);

        if (appearCount === 1) {
            maxAlmostMissingInteger = Math.max(maxAlmostMissingInteger, num);
        }
    }
    
    return maxAlmostMissingInteger;
};

// Test Cases
console.log(
    largestInteger(
    [3, 9, 2, 1, 7],
    3
),
) // 7

console.log(
    largestInteger(
    [3, 9, 7, 2, 1, 7],
    4
),  
) // 3

console.log(
    largestInteger(
    [0, 0],
    1
)) // 0