// Lv. 0 소인수분해

/**
 * @param {number} n
 * @return {number[]}
 */

const solution = (n) => {
    if (n <= 3) return [n];

    const sieve = new Array(n + 1).fill(false, 0, 2);

    for (let i = 2; i < sieve.length; i++) {
        if (sieve[i] !== false) {
            sieve[i] = i;

            for (let j = i + i; j < sieve.length; j += i) {
                sieve[j] = false;
            }
        }
    }

    const result = sieve.filter((v) => v === Number(v) && n % v === 0);

    return result.length ? result : [n];
};
