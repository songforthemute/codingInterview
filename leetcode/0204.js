// 204. Count Primes
const countPrimes = (n) => {
    if (n <= 2) return 0;

    const dp = new Array(n).fill(false, 0, 2).fill(true, 2);

    for (let i = 2; i ** 2 < n; i++) {
        if (dp[i]) {
            for (let j = i ** 2; j < n; j += i) {
                dp[j] = false;
            }
        }
    }

    return dp.filter((v) => v).length;
};
