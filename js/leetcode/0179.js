// 179.Largest Number
const largestNumber = (nums) => {
    const sorted = nums
        .sort((a, b) => {
            return Number(`${b}${a}`) - Number(`${a}${b}`);
        })
        .join("");

    return sorted[0] === "0" ? "0" : sorted;
};
