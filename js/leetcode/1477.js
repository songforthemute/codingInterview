// 1477. Find Two Non-overlapping Sub-arrays Each With Target Sum

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
    /**
     * 슬라이딩 윈도우, 누적합, DP 중 하나
     * 부분집합 간의 겹칩도 의식해야 한다
     * 
     * left, right
     * 타겟보다 크면 left++, 타겟보다 작으면 right++
     * 
     * best[i] = 0~i 구간에서 타겟 합을 만족하는 가장 짧은 부분집합의 길이
     * 즉, best[i] = min(best[i-1], right - left + 1)
     */

    let left = 0, right = 0, sum = arr[0], result = Infinity;
    const dp = new Array(arr.length).fill(Infinity);

    while (right < arr.length) {
        
        if (sum < target) {
            if (++right >= arr.length) break;

            // 0 ~ i-1에서 찾았던 구간은 0 ~ i에도 포함 >> 그래서 이전 최솟값을 이어받고, 새 유효 구간을 찾으면 더 짧은지 비교
            dp[right] = dp[right - 1];
            // 좌측으로 right 포인터 이동
            sum += arr[right];
        } else {
            if (sum === target) {
                const length = right - left + 1;

                dp[right] = Math.min(dp[right], length);

                if (left > 0) {
                    result = Math.min(result, dp[left - 1] + length);
                }
            }

            // 우측으로 left 포인터 이동
            sum -= arr[left++];
        }
    }

    return result === Infinity ? -1 : result;
};

// Test Cases
console.log(
    minSumOfLengths([3, 2, 2, 4, 3], 3) // 2
)

console.log(
    minSumOfLengths([7, 3, 4, 7], 7) // 2
)

console.log(
    minSumOfLengths([4, 3, 2, 6, 2, 3, 4], 6) // -1
)