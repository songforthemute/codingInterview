/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    /**
     * 고정 축 2개를 더한 투포인터
     * o(n^4)가 기본 골자 -> o(n^3)으로 줄이기 위해 고정 축 2개를 더한 투포인터를 사용
     * 이후 각각 중복되는 케이스에 대한 최적화
     */
    const result = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let left = j + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;

                    while (left < right && nums[left] === nums[left - 1])
                        left++;
                    while (left < right && nums[right] === nums[right + 1])
                        right--;
                }

                // 목표보다 더 큼
                else if (sum > target) {
                    right--;
                }

                // 목표보다 더 작음
                else {
                    left++;
                }
            }
        }
    }

    return result;
};
