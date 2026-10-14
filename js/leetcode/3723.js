// 3723. Maximize Sum of Squares of Digits

/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function(num, sum) {
    /**
     * n의 자릿수가 num
     * n의 자릿수 합이 sum
     * 좋은 정수 n의 점수는 n의 각 자릿수의 제곱의 합
     * 
     * 일단 음수는 안된다
     * 특정 자릿수 하나의 구간은 0~9
     * 각 자릿수의 제곱의 합이 커야 한다
     *      == 결국 순서는 상관없다
     *      == 애매한 수 여러 개 보다 큰 수 하나
     *          == 결국 큰 수부터 줄여나가야 함
     */

    if (num * 9 < sum) return ''

    const quotient = Math.floor(sum / 9);
    const remainder = sum % 9;

    const result = [];

    if (quotient !== 0) {
        for (let i = 0; i < quotient; i++) result.push(9);
        if (remainder !== 0) result.push(remainder);
    } else {
        if (remainder !== 0) result.push(remainder);
        for (let i = 0; i < num - 1; i++) result.push(0);
    }

    while (result.length !== num) result.push(0);

    return result.join('');
};

// Test Cases
console.log(
    maxSumOfSquares(
        2, 3 // '30'
    )
)

console.log(
    maxSumOfSquares(
        2, 17 // '98'
    )
)

console.log(
    maxSumOfSquares(
        1, 10 // ''
    )
)