// 2913. Subarrays Distinct Element Sum of Squares I

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    /**
     * 결국 부분집합과 그 부분집합의 set을 구하는 문제
     */

    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        const set = new Set();

        for (let j = i; j < nums.length; j++) {
            set.add(nums[j]);

            result += set.size ** 2;
        }
    }

    return result;
};

// Test Cases
console.log(
    sumCounts(
        [1, 2, 1] // 15
    )
)

console.log(
    sumCounts(
        [1, 1] // 3
    )
)