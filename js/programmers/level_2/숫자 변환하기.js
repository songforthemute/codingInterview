// Lv. 2 숫자 변환하기

/**
 * @param {number} x 자연수
 * @param {number} y 자연수
 * @param {number} n 자연수
 * @returns {number} `y`를 변환하기 위해 필요한 최소 연산 횟수, 혹은 만들 수 없다면 `-1`
 */

const solution = (x, y, n) => {
    if (x === y) return 0;

    const dp = [[x]];
    const record = { [x]: 0 };

    for (let i = 1; dp[i - 1].length; i++) {
        dp[i] = [];

        for (const number of dp[i - 1]) {
            for (const candidate of [number + n, number * 2, number * 3]) {
                if (candidate > y || record[candidate]) continue;
                else if (candidate === y) return i;
                else {
                    dp[i].push(candidate);
                    record[candidate] = i;
                }
            }
        }
    }

    return -1;
};

// test cases
console.log(solution(10, 40, 5)); // 2
console.log(solution(10, 40, 30)); // 1
console.log(solution(2, 5, 4)); // -1
