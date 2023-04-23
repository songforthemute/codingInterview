// Lv. 0 조건에 맞게 수열 변환하기 3

/**
 * @param {number[]} arr 정수 배열
 * @param {number} k 자연수
 * @returns {number[]} `k`가 홀수라면 `arr`의 모든 원소에 k를 곱하고, 아니라면 모든 원소에 k를 더한 배열
 */

const solution = (arr, k) => {
    return k % 2 ? arr.map((v) => v * k) : arr.map((v) => v + k);
};

// test cases
console.log(solution([1, 2, 3, 100, 99, 98], 3)); // [3, 6, 9, 300, 297, 294]
console.log(solution([1, 2, 3, 100, 99, 98], 2)); // [3, 4, 5, 102, 101, 100]
