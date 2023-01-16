// 78. Subsets
const subsets = (nums) => {
    if (nums.length === 1) return [[], nums];

    const result = [[]];

    for (let i = 0; i < nums.length; i++) {
        const breadth = result.length;
        for (let j = 0; j < breadth; j++) result.push([...result[j], nums[i]]);
    }

    return result;
};
