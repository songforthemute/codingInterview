// 2333. Minimum Sum of Sqaured Difference

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
var minSumSquareDiff = function(nums1, nums2, k1, k2) {
    /**
     * 가장 작은 제곱수의 합 찾기
     *      제곱수가 최소가 되려면 >> 절댓값이 작아야 한다.
     */

    const diffs = nums1.map((num, i) => Math.abs(num - nums2[i])).sort((a, b) => b - a);

    let k = k1 + k2;
    let i = 0;

    function applyGap(index, cost) {
        const count = index + 1;
        const operation = Math.min(k, cost);

        const quotient = Math.floor(operation / count);
        const remainder = operation % count;

        k -= operation;

        return {
            isReached: operation === cost,
            level: diffs[index] - quotient,
            remainder
        }
    }

    while (i < diffs.length) {
        const target = diffs[i + 1] ?? 0;
        const count = i + 1;
        const cost = (diffs[i] - target) * count;

        const { isReached, level, remainder } = applyGap(i, cost);

        if (isReached) {
            i++;
            continue;
        }

        // 현재 그룹의 최종 값 반영
        for (let j = 0; j < count; j++) {
            diffs[j] = level;

            // 나머지 연산 (잔여 k보다 나머지가 작다)
            if (j < remainder) diffs[j]--;
        }

        return diffs.reduce((acc, diff) => acc + diff ** 2, 0);
    }

    return 0;
};

// Test Cases
console.log(
    minSumSquareDiff(
        [1, 2, 3, 4], [2, 10, 20, 19], 0, 0 // 579
    )
);

console.log(
    minSumSquareDiff(
        [1, 4, 10, 12], [5, 8, 6, 9], 1, 1 // 43
    )
);