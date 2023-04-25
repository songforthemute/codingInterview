// Lv. 0 n 번째 원소부터

/**
 * @param {number[]} num_list 정수 리스트
 * @param {number} n 정수
 * @returns {number} `n` 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트
 */

const solution = (num_list, n) => {
    return num_list.slice(n - 1);
};

// test cases
console.log(solution([2, 1, 6], 3)); // [6]
console.log(solution([5, 2, 1, 7, 5], 2)); // [2,1,7,5]
