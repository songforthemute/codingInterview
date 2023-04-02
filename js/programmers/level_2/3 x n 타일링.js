// Lv. 2 3 x n 타일링

/**
 * @param {number} n 직사각형의 가로 길이
 * @return {number} 직사각형을 타일로 채우는 방법의 수
 */

const solution = (n) => {
    if (n % 2 !== 0) return 0; // odd number caes is cannot full of rectangle

    /**
     * n = 2: 3 => 3
     * n = 4: 3 * 3 + 2 => 11
     * n = 6: 3 * 3 * 3 + 2 * 3 * 2 + 2 => 41
     * ...
     * f(n) = 3f(n - 2) + 2f(n - 4) + f(n - 6) + f(n - 8) ...
     * f(n - 2) = 3f(n - 4) + 2f(n - 6) + f(n - 8) ....
     * f(n - 4) = 3f(n - 6) + 2f(n - 8) + f(n - 10) ...
     * ...
     * f(n) = 4f(n - 2) - f(n - 4) ...
     */
    const dp = [1, 3];

    /**
     * Modular arithmetic
     * (a + b) % n = (a % n + b % n) & n
     */
    const MODULO = 1000000007;
    const calc = (a, b) => {
        return (MODULO + (((a % MODULO) * 4) % MODULO) - (b % MODULO)) % MODULO;
    };

    for (let i = 2; i <= n / 2; i++) {
        dp[i] = calc(dp[i - 1], dp[i - 2]);
    }

    return dp[dp.length - 1];
};

// test cases
console.log(solution(4)); // 11
console.log(solution(6)); // 41
console.log(solution(8)); // 153
console.log(solution(10)); // 571
console.log(solution(12)); // 2131
console.log(solution(14)); // 7953
