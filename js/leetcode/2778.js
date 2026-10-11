// 2778. Sum of Squares of Special Elements

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    return nums.reduce((acc, cur, i) => {
        if (nums.length % (i + 1) === 0) {
            return acc + cur ** 2;
        }
        return acc;
    }, 0);
};

// Test Cases
console.log(
    sumOfSquares(
        [1, 2, 3, 4] // 21
    )
);

console.log(
    sumOfSquares(
        [2, 7, 1, 19, 18, 3] // 63
    )
);