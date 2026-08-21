// 3116. Kth Smallest Amount With Single Denomination Combination

/**
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var findKthSmallest = function(coins, k) {
    /**
     * k의 범위가 너무 크다.
     * -> 이진 탐색으로 k번째 수를 찾는다?
     * -> 그럼 조합은 어떻게 만들 것인가?
     * -> 전부 만든다? -> k가 2*10^9까지 가능하므로 불가능
     * 
     * 구구단을 생각해보자.
     * -> coins의 길이가 1이라면 k번째 수는 coins[0] * k이다.
     * -> coins의 길이가 2라면 k번째 수는 coins[0] * i + coins[1] * j (i, j >= 0) 중 k번째 수이다.
     * -> 그런데 길이가 2 이상인 경우, 공배수 라는 부분에서 겹치기 마련.
     * -> 공배수의 단 수는 coins.length === 2일때 1개,
     * -> coins.length === 3일때 3개,
     * -> coins.length === 4일때 7개,
     * -> coins.length === 5일때 15개,
     * -> 2^conins.length - 1개가 된다.
     * 
     * 그럼 조합을 만들어야 하는 범위를 구해보자.
     * -> coins.length === 1이면 k개를 만들고, k번째 인덱스를 찾는다.
     * -> coins.length === 2이면 coins[0] * k + coins[1] * k - (2 ** coins.length - 1)개를 만들고, k번째 인덱스를 찾는다.
     * -> 여기서 k번째 인덱스를 찾는 것은?
     *      -> 차라리 반대로 생각해보자.
     *      -> 결국 coins가 2개 이상일때, k번째 인덱스는 구간의 반은 coins[0], 나머지 반은 coins[1]의 영역.
     *      -> 그러나 공배수 범위가 겹쳐서 조합 k개를 만들기 위해서는 공배수 개수만큼 더해야 한다.
     *      -> coins.length === 2일때, coins[0] * k / 2 + coins[1] * k / 2 + (2 ** coins.leength)
     *      -> 그럼 결국 공배수 개수인 (2 ** coins.length - 1 / coins.length) 만큼 단 수를 더 셈한다.
     *      -> 그런데 그냥 Set으로 k만 줄여서 셈하는 게 낫지 않나?
     *      -> Set은 정렬이 필요하네. Object라면? 
     *      -> 2*10^9면 20억개니까 Object쓰기는 OOM 가능...
     */

    /**
     * k번째 인덱스에 올 값의 상한은 가장 작은 코인의 k번째 단 수이다.
     * 즉 n === Math.min(...coins) * k
     * -> n에서 실제 인덱스를 구해야 한다.
     *      -> k - 공배수의 개수 + [코인들의 단 수]
     */

    const minCoin = Math.min(...coins);
    let lowerBound = minCoin;
    let upperBound = minCoin * k;

    function gcd(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }

        return a;
    }

    function lcm(a, b) {
        return a / gcd(a, b) * b;
    }

    function getCMCombination() {
        const combinations = [];

        for (const coin of coins) {
            const newCombinations = [{
                commonMultiple: coin,
                sign: 1,
            }];
            
            for (const combination of combinations) {
                newCombinations.push({
                    commonMultiple: lcm(combination.commonMultiple, coin),
                    sign: -combination.sign
                });
            }

            combinations.push(...newCombinations)
        }

        return combinations;
    }

    const combinations = getCMCombination();

    function calcCount(threshold) {
        /**
         * 홀수 세트는 더하고
         * 짝수 세트는 뺀다
         */
        return combinations.reduce((acc, cur) => {
            return acc + Math.floor(threshold / cur.commonMultiple) * cur.sign;
        }, 0);
    };

    while (lowerBound < upperBound) {
        const mid = Math.floor((lowerBound + upperBound) / 2);
        const count = calcCount(mid);

        if (count >= k) upperBound = mid;
        else lowerBound = mid + 1;
    };

    return lowerBound;
};

// Test Cases
console.log(
    findKthSmallest([3, 6, 9], 3) // 9
);

console.log(
    findKthSmallest([5, 2], 7) // 12
);