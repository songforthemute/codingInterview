// 3946. Maximum Number of Items From Sale I

/**
 * @param {number[][]} items
 * @param {number} budget
 * @return {number}
 */
var maximumSaleItems = function(items, budget) {
    /**
     * items[i] = [factor[i], price[i]]
     * 
     * 각 품목은 무제한으로 구매 가능
     * - 구매한 품목의 총 비용이 budget을 초과하지 않는 범위 내에서
     * 
     * 아이템을 산 뒤, 무료로 아이템을 획득 가능
     * - 적어도 한 개 이상 구매한 i 아이템에 대해, j != i 이면서,
     *      factor[i]가 factor[j]를 나눌 수 있는 모든 아이템 j에 대해 각각 한 개씩 무료 수령
     * - 동일한 아이템 i를 여러 개 구매하더라도 해당 아이템 i를 통해 추가로 무료로 받을 수 있는 아이템은 X
     * - 서로 다른 아이템 유형의 구매를 통해 받은 경우, 동일한 아이템 j를 여러 번 무료로 받을 수 있음
     * 
     * 구매한 아이템에 대해 예산을 최대한 활용하면서,
     * 구매한 아이템과 무료로 획득한 아이템을 포함한 총 개수의 최대값 반환
     */

    /**
     * 그럼 결국 factor가 작아야, 나눌 수 있는 후보가 많고, 무료로 받을 수 있는 아이템이 많을 확률이 높다
     * -> 그리디? -> 팩터 기준으로 정렬해도 뒤에 뭐가 없어서 저렴한 아이템을 더 많이 사는게 이득일지도
     *      -> 그럼 DP
     *          -> 
     *          -> 나머지
     *              -> 가장 저렴한 아이템을 추가 구입해서 반환
     */

    const N = items.length;
    let gains = new Array(N).fill(1);
    let minPrice = Infinity;
    let maxItems = 0;

    // gains[i] = i 아이템 최초 1개 구매 시, 얻게되는 총 아이템 개수
    for (let i = 0; i < N; i++) {
        const [factorI, priceI] = items[i];

        minPrice = Math.min(minPrice, priceI);

        for (let j = 0; j < N; j++) {
                if (i !== j && items[j][0] % factorI === 0) {
                    gains[i]++;
                }
        }
    }

    // best[j]: 예산 j로 구매할 수 있는 최대 아이템 개수 - 즉, i원 예산 조합 시뮬레이션 최고기록
    const best = new Array(budget + 1).fill(0);

    for (let i = 0; i < items.length; i++) {
        const price = items[i][1];

        /**
         * i번 상품을 안사는 경우 그대로 best[j]
         * i번 상품을 사는 경우 best[j - price] + gains[i] (해당 금액을 차감한 예산의 최대치 + 현재 상품에 대한 최대치)
         * j-price 때문에, budget부터 price까지 역순으로 순회해야 함
         *  - 만약 순방향으로 순회하면, best[j - price]가 이미 갱신되어서, i번 상품을 여러 번 구매한 것처럼 계산됨
         *  - 따라서 역순으로 순회해야 함
         */
        for (let j = budget; j >= price; j--) {
            best[j] = Math.max(best[j], best[j - price] + gains[i]);
        }
    }

    // 3. 남은 예산으로 최저가 아이템을 최대한 추가 구매
    for (let cost = 0; cost <= budget; cost++) {
        const extra = Math.floor((budget - cost) / minPrice);
        maxItems = Math.max(maxItems, best[cost] + extra);
    }

    return maxItems;
};

// Examples

console.log(
    maximumSaleItems(
        [[6, 2], [2, 6], [3, 4]],
        9
    ) // 4
)

console.log(
    maximumSaleItems(
        [[2, 4], [3, 2], [4, 1], [6, 4], [12, 4]],
        8
    ) // 10
)