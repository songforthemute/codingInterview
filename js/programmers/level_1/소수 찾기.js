// Lv. 1 소수 찾기

/**
 *
 * @param {number} n
 * @returns {number}
 */

function solution(n) {
    let result = 0;
    let primes = new Array(n + 1).fill(true).fill(false, 0, 2);

    for (let i = 2; i ** 2 <= n; i++) {
        if (primes[i]) {
            for (let j = i ** 2; j <= n; j += i) primes[j] = false;
        }
    }

    primes.forEach((e) => {
        if (e) result++;
    });

    return result;
}
