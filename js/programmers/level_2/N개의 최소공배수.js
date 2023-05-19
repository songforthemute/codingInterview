// Lv. 2 N개의 최소공배수

/**
 * @param {number[]} arr n개의 숫자를 담은 배열
 * @returns {number} 이 수들의 최소 공배수
 */

function solution(arr) {
    const factors = {}; // store for saving factors in arr

    // store for saving primes to the maximum number in arr
    const primes = new Array(Math.max(...arr) + 1).fill(true).fill(false, 0, 2);

    // get the primes to the maximum number in arr
    for (let i = 2; i <= primes.length; i++) {
        if (primes[i]) {
            for (let j = i * 2; j <= primes.length; j += i) {
                primes[j] = false;
            }
        }
    }

    // get and calculate the factors of numbers in arr
    arr.forEach((number) => {
        for (let i = 2; i <= number; i++) {
            let current = number; // initial value === the number in arr

            // if current index is prime && if current number is divided by current index completely
            if (primes[i] && number % i === 0) {
                let count = 0;

                // the probability of appearing factors continuously
                while (current % i === 0) {
                    current /= i;
                    count++;
                }

                // if already exist the factor, renew as bigger count
                factors[i] = factors[i] ? Math.max(factors[i], count) : count;
            }

            // be divided completely
            if (current === 0) break;
        }
    });

    let result = 1;

    // multiply the factors squared counts to result
    for (const factor in factors) {
        result *= Number(factor) ** factors[factor];
    }

    return result;
}

// test cases
console.log(solution([2, 6, 8, 14]));
console.log(solution([1, 2, 3]));
