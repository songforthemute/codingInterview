// 84. Largest Rectangle in Histogram

/**
 * @param {number[]} heights
 * @return {number}
 */

var largestRectangleArea = function (heights) {
    if (heights.length === 1) return heights[0];

    let maxW = 0;

    const stack = [];
    const height = [0, ...heights, 0];

    for (let i = 0; i < height.length; i++) {
        // current height is smaller than [last stack elem]'s height

        while (stack.length && height[i] < height[stack[stack.length - 1]]) {
            const h = height[stack.pop()]; // height of stack's last element
            const w = i - stack[stack.length - 1] - 1; // width from current (except zero at arr[0])
            // getting width after popped, cuz unshift zero when init

            if (maxW < h * w) maxW = h * w;
        }

        stack.push(i);
    }

    return maxW;
};
