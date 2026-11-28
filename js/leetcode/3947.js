// 3947. Maximum Number of Items From Sale II

/**
 * @param {number[][]} items
 * @param {number} budget
 * @return {number}
 */
var maximumSaleItems = function(items, budget) {
    /**
     * items[i] = [factor[i], price[i]]
     * 
     * 각 품목은 무제한 구매 가능
     * 
     * 무료 카피를 받는 조건
     * - items[i], items[j]에 대해서, i !== j
     * - itmes[i], items[j]에 대해서, factor[j] % factor[i] === 0
     * - 구매한 아이템 i 1개당, 무료 아이템 j는 최대 1개까지만 받을 수 있음
     * - 서로 다른 종류의 아이템 구매를 통해 받는 경우, 동일한 아이템 j를 여러 번 받을 수 있음
     */

    const isDividable = (i, j) => {
        const isDifferent = i !== j;
        const isDividable = items[j][0] % items[i][0] === 0;
        return isDifferent && isDividable;
    }

    let result = 0;
    
    const sortedByLowerPrice = items.sort(([factorA, priceA], [factorB, priceB]) => {
        return priceA !== priceB ? priceA - priceB : factorA - factorB
    })
    
    const minPrice = sortedByLowerPrice[0][1];
    const N = items.length;
    let maxFactor = -1;

    const frequency = {};
    const countByFactor = {};

    items.forEach(([factor]) => {
        if (!frequency[factor]) frequency[factor] = 1
        else frequency[factor]++
        maxFactor = Math.max(maxFactor, factor);
    })

    Object.keys(frequency).forEach((key) => {
        const factor = Number(key);
        let total = 0;

        // 상품 하나마다 보너스로 주어지는 게 유니크한 것
        // n개 사도 1개를 주는 것 X -> n개 사면 각각의 보너스가 유니크하게 주어져서 m개 획득 가능
        for (let i = factor; i <= maxFactor; i += factor) {
            if (frequency[i]) total += frequency[i];
        }

        // 자기 자신은 제외
        countByFactor[factor] = total - 1;
    })

    sortedByLowerPrice.forEach(([factor, price], i) => {
        const isWorthBuying = price < minPrice * 2

        // 살 가치가 있으면 사고, 아니면 구매 X -> 안사면 minPrice에서 해결
        if (isWorthBuying) {
            const count = Math.min(countByFactor[factor], Math.floor(budget / price));
            result += count * 2;
            budget -= count * price;
        }
    })

    // 나머지 최소가 상품 최대한 구매
    return result + Math.floor(budget / minPrice);
};

// Examples

console.log(
    maximumSaleItems(
        [[1, 6], [2, 4], [3, 5]], 19 // 5
    )
)

console.log(
    maximumSaleItems(
        [[2, 8], [1, 10], [6, 6], [4, 12], [5, 20], [5, 17]], 35 // 7
    )
)