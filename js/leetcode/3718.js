// 3718. Smallest Missing Multiple of K

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    /**
     * k단의 배수 중, nums 배열에 포함되지 않은 가장 작은 수.
     * 즉 k * 1이 최솟값.
     * 
     * 단순 접근:
     *      k * n에서 n을 늘려가며, 매 n의 라운드마다 includes로 검사
     *      그런데, 그럼 O(n^2)...
     *      includes를 하더라도, 인수분해를 통해 k가 없는 요소를 제거하고 하면?
     *      최대 공약수가 k여야 한다?
     */

    const gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a % b);
    }

    const validNums = nums.filter((v) => gcd(v, k) === k);
    let counter = 1;

    while (true) {
        const current = counter * k;
        if (!validNums.includes(current)) return current;
        counter++;
    }
};

// Test Cases
console.log(
    missingMultiple([8, 2, 3, 4, 6], 2) // 10
)

console.log(
    missingMultiple([1, 4, 7, 10, 15], 5) // 5
)