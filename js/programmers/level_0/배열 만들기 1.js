// Lv. 0 배열 만들기 1

/**
 * @param {number} n 정수1
 * @param {number} k 정수2
 * @returns {number[]} 1 이상, `n`이하의 정수 중에서 `k`의 배수를 오름차순으로 저장한 배열
 */

const solution = (n, k) => {
    return Array(Math.floor(n / k))
        .fill(0)
        .map((_, i) => (i + 1) * k);
};

// test cases
console.log(solution(10, 3)); // [3,6,9]
console.log(solution(15, 5)); // [5,10,15]
