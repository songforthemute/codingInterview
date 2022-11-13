// Lv. 0 분수의 덧셈

/**
 * @param {number} denum1
 * @param {number} num1
 * @param {number} denum2
 * @param {number} num2
 * @return {number[]}
 */

const solution = (denum1, num1, denum2, num2) => {
    const result = [denum1 * num2 + num1 * denum2, num1 * num2];
    const divide = (a, b) => {
        if (b === 0) return a;

        return divide(b, a % b);
    };

    let gcd = divide(result[0], result[1]);

    return result.map((v) => v / gcd);
};
