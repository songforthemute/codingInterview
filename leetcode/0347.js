// 347. Top K Frequent Elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const topKFrequent = (nums, k) => {
    if (nums.length === 1) return [nums[0]];

    const sorting = (origin, arr = []) => {
        let count = 0;
        let saved = origin[0];

        for (let i = 0; i < origin.length; i++) {
            if (saved !== origin[i] && i !== origin.length - 1) {
                arr.push([saved, count]);
                count = 1;
                saved = origin[i];
            } else if (i === origin.length - 1) {
                if (saved !== origin[i]) {
                    arr.push([saved, count], [origin[i], 1]);
                } else {
                    arr.push([saved, count + 1]);
                }
            } else {
                count++;
            }
        }

        return arr;
    };

    const sorted = nums.sort((a, b) => a - b);
    const result = sorting(sorted).sort((a, b) => b[1] - a[1]);
    const answer = [];

    for (let i = 0; i < k; i++) answer.push(result[i][0]);

    return answer;
};