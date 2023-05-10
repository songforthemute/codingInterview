// 268. Missing Number

/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * New Solution:
 * Time: O(n) / Runtime 48ms, 99.42%
 * Space: O(1) / Memory 44.6MB, 49.88%
 */

const missingNumber = (nums) => {
    return (
        (nums.length * (nums.length + 1)) / 2 -
        nums.reduceRight((pre, cur) => pre + cur, 0)
    );

    // return nums.reduceRight((pre, cur, idx) => pre - cur + idx + 1, 0);
};

/**
 * Previous Solution: 
 * Time: O(n) / Runtime 59ms, 88.45%
 * Space: O(n) / Memory: 44.8MB, 35.12%
  
    const missingNumber = (nums) => {
        const arr = new Array(nums.length + 1).fill(null);

        for (const n of nums) arr[n] = n;

        return arr.indexOf(null);
    };
 */
