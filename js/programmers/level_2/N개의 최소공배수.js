// Lv. 2 N개의 최소공배수

/**
 * @param {number[]} arr
 * @returns {number}
 */

function solution(arr) {
    let result = 1;
    const factors = {};
    const primes = new Array(Math.max(...arr) + 1).fill(true).fill(false, 0, 2);

    for (let i = 2; i <= primes.length; i++) {
        if (primes[i]) {
            for (let j = i * 2; j <= primes.length; j += i) {
                primes[j] = false;
            }
        }
    }

    arr.forEach((v) => {
        for (let i = 2; i <= v; i++) {
            let num = v;
            if (primes[i] && v % i === 0) {
                let count = 0;

                while (num % i === 0) {
                    num /= i;
                    count++;
                }

                factors[i] = factors[i] ? Math.max(factors[i], count) : count;
            }

            if (num === 0) break;
        }
    });

    for (const factor in factors) {
        result *= Number(factor) ** factors[factor];
    }

    return result;
}
