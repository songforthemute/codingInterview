// Lv. 3 아방가르드 타일링

/**
 * @param {number} n 가로 길이
 * @return {number} `n` x 3 크기의 판을 타일링하는 방법의 수
 */

const solution = (n) => {
    const MOD = 1000000007; // modulo for preventing overflow
    const dp = [0, 1, 3, 10]; // preset: 1, 2, 5, 2, 2, 4, 2, 2, 4, ...
    dp.length = n + 1;

    // pattern: f(i) = f(i - 1) + 2f(i - 2) + 5f(i - 3) + 2f(i - 4) + 2f(i - 5) + 4f(i - 6) + ...
    // prototype: f(i) = 2 * Σ[1 <= j < i - 1] f(j) - f(i - 1) + 3f(i - 3) + 2f(i - 6) + ...
    // formula: f(i) = 2 * Σ[1 <= j < i - 1] f(j) - f(i - 1) + 2 * Σ[1 <= j] f(i - 3j) + f(i - 3) + new pieces

    // sum for sigma to i - 1, `Σ[1 <= j < i - 1] f(j)`
    // sumPer3 for recursive part, ... + 3f(i - 3) + 2f(i - 6) + 2f(i - 9) + ...
    // So, Σ[1 <= j] f(i - 3j)
    const sumPer3 = [10, 1, 3]; // i % 3 === [0, 1, 2]
    let sum = sumPer3.reduceRight((pre, cur) => pre + cur);

    for (let i = 4; i < dp.length; i++) {
        dp[i] =
            (((sum * 2) % MOD) +
                ((sumPer3[i % 3] * 2) % MOD) -
                (dp[i - 1] % MOD) +
                (dp[i - 3] % MOD) +
                (i % 3 ? 2 : 4) + // new pieces: 2, 2, 4, 2, 2, 4, ...
                MOD) % // for very big integer in modulo operation
            MOD;

        // sum each other the current value
        sum = (sum + dp[i]) % MOD;
        sumPer3[i % 3] = (sumPer3[i % 3] + dp[i]) % MOD;
    }

    return dp[n];
};

// test cases
console.log(solution(2)); // 3
console.log(solution(3)); // 10
console.log(solution(4)); // 23
console.log(solution(5)); // 62
console.log(solution(6)); // 170
console.log(solution(7)); // 441
