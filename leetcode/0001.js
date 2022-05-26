// 1. Two Sum
const twoSum = (nums, target) => {
    const elems = [];

    for (let i = 0; i < nums.length; i++) elems.push([nums[i], i]);
    elems.sort((a, b) => {
        return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
    });

    let left = 0,
        right = elems.length - 1;

    while (left < right) {
        const small = elems[left],
            big = elems[right];

        if (small[0] + big[0] === target) return [small[1], big[1]];
        else if (small[0] + big[0] > target) right--;
        else if (small[0] + big[0] < target) left++;
    }

    return [];
};
