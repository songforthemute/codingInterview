// 122. Best Time to Buy and Sell Stock II

/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {
    let sum = 0;
    let saved;
    let curr;

    for (let i = 1; i < prices.length; i++) {
        saved = prices[i - 1];
        curr = prices[i];

        if (saved < curr) sum += curr - saved;
    }

    return sum;
};
