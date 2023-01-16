// Lv. 1 폰켓몬

/**
 *
 * @param {number[]} nums
 * @returns {number}
 */

function solution(nums) {
    const obj = {};

    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) obj[nums[i]]++;
        else obj[nums[i]] = 1;
    }

    return Object.keys(obj).length > nums.length / 2
        ? nums.length / 2
        : Object.keys(obj).length;
}
