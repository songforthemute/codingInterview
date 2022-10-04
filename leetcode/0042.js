// 42. Trapping Rain Water

/**
 * @param {number[]} height
 * @return {number}
 */

const trap = (height) => {
    if (height.length <= 1) return 0;

    let sum = 0;

    let left = 0;
    let right = height.length - 1;

    let leftMax = 0;
    let rightMax = 0;

    while (left < right) {
        if (height[left] < leftMax) sum += leftMax - height[left];
        else leftMax = height[left];

        if (height[right] < rightMax) sum += rightMax - height[right];
        else rightMax = height[right];

        height[left] < height[right] ? left++ : right--;
    }

    return sum;
};
