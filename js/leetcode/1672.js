// 1672. Richest Customer Wealth
const maximumWealth = (accounts) => {
    let max = -Infinity;

    for (const arr of accounts) {
        const current = arr.reduce((prev, cur) => prev + cur, 0);
        max = Math.max(max, current);
    }

    return max;
};
