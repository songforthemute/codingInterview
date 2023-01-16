// 121. Best Time to Buy and Sell Stock
const maxProfit = (prices) => {
    let result = 0;
    let min = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (min > prices[i]) min = prices[i];
        else if (prices[i] - min > result) result = prices[i] - min;
    }

    return result;
};
