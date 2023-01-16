// 11. Container With Most Water
const maxArea = (height) => {
    let max = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const nowSize = (right - left) * Math.min(height[left], height[right]);

        if (nowSize > max) max = nowSize;

        if (height[left] > height[right]) right--;
        else left++;
    }

    return max;
};
