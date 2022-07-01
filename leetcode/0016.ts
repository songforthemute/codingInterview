// 16. 3Sum Closet
function threeSumClosest(nums: number[], target: number): number {
    if (nums.length === 3) return nums.reduce((prev, curr) => prev + curr, 0);

    const sorted = nums.sort((a, b) => a - b);
    let min: number = Infinity;

    for (let i = 0; i < sorted.length; i++) {
        let left = i + 1;
        let right = sorted.length - 1;

        while (left < right) {
            let sum = sorted[i] + sorted[left] + sorted[right];

            if (Math.abs(target - sum) < Math.abs(target - min)) min = sum;
            if (sum < target) left++;
            else right--;
        }
    }

    return min;
}
