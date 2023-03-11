// 15. 3Sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = function (nums) {
    nums.sort((a, b) => a - b);

    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // no need to check anymore
        if (nums[i] > 0) break;
        // no need to check duplicated cases
        if (nums[i] === nums[i - 1]) continue;

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];

            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]]);

                j++;

                // no need to check duplicated cases
                while (j < k && nums[j] === nums[j - 1]) j++;
                while (j < k && nums[k] === nums[k + 1]) k--;
            } else if (sum < 0) {
                // move pointer to bigger
                j++;
            } else {
                // move pointer to smaller
                k--;
            }
        }
    }

    return result;
};

// test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [0,0,0]
