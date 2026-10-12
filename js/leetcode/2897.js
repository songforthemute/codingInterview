// 2897. Apply Operations to Array to Maximize Sum of Squares

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSum = function(nums, k) {
    const bitCount = Array(32).fill(0);
    const result = [];

    nums.forEach((num) => {
        for (let bit = 0; bit < bitCount.length; bit++) {
            if ((num >> bit) & 1) {
                bitCount[bit]++;   
            }
        }
    });

    while (k > 0) {
        k--;
        
        // 가장 큰 수 하나씩 뽑기
        let value = 0;

        for (let i = 0; i < bitCount.length; i++) {
            if (bitCount[i] > 0) {
                value += 2 ** i;
                bitCount[i]--;
            }
        }

        result.push(value);
    }

    const MOD = 1000000007n;

    return Number(
        result.reduce((acc, cur) => {
            return (acc + BigInt(cur) * BigInt(cur)) % MOD;
        }, 0n)
    )
};

// Example usage:
console.log(
    maxSum(
        [2, 6, 5, 8], 2 // 3
    )
);

console.log(
    maxSum(
        [4, 5, 4, 7], 3 // 90
    )
)