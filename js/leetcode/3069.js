// 3069. Distribute Elements Into Two Arrays I

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
    const arr1 = [nums[0]];
    const arr2 = [nums[1]];

    nums.forEach((n, i) => {
        if (i < 2) return;

        const lastArr1 = arr1[arr1.length - 1];
        const lastArr2 = arr2[arr2.length - 1];

        lastArr1 > lastArr2 ? arr1.push(n) : arr2.push(n);
    });

    return [...arr1, ...arr2];
};