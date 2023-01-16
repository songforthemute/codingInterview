// 39. Combination Sum

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const combinationSum = (candidates, target) => {
    if (
        !candidates.length ||
        (candidates[0] > target && candidates.length === 1)
    )
        return [];

    const result = [];

    const permutation = (arr = [], sum = 0, idx = 0) => {
        if (sum > target) return;
        if (sum === target) result.push(arr);

        for (let i = idx; i < candidates.length; i++) {
            permutation([...arr, candidates[i]], sum + candidates[i], i);
        }
    };

    permutation();

    return result;
};
