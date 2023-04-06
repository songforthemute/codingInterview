// Lv. 2 숫자 블록

/**
 * @param {number} begin 구간을 나타내는 정수1
 * @param {number} end 구간을 나타내는 정수2
 * @return {number[]} 해당 구간에 깔려 있는 블록의 숫자 배열
 */

const solution = (begin, end) => {
    const MAX = 10000000; // maximum number of the block
    const isPrime = (n) => {
        if (n < 2) return false;

        for (let i = 2; i ** 2 <= n; i++) {
            if (n % i === 0) return false;
        }

        return true;
    };

    const getMaxDivisor = (n) => {
        if (n <= 2) return 1;

        // need to record divisors for getting max divisor
        const divisors = [];

        for (let i = 2; i <= n ** 0.5; i++) {
            if (n % i === 0) {
                divisors.push(i);
                if (n / i <= MAX) return n / i;
            }
        }

        return divisors.length ? divisors[divisors.length - 1] : 1;
    };

    return new Array(end - begin + 1).fill().map((_, i) => {
        const current = i + begin;

        if (current === 1) return 0;
        if (isPrime(current)) return 1;
        return getMaxDivisor(current);
    });
};

// test cases
console.log(solution(1, 10)); // [0, 1, 1, 2, 1, 3, 1, 4, 3, 5]
console.log(solution(1000000000 - 10, 1000000000)); // [9900990, 67, 2004008, 51, 14, 2247191, 12, 444247, 1447178, 9009009, 10000000]
