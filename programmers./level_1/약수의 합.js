// Lv. 1 약수의 합

/**
 *
 * @param {number} n
 * @returns {number}
 */

function solution(n) {
    let result = 0;

    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i === n / i) result += i;
            else result += i + n / i;
        }
    }

    return result;
}
