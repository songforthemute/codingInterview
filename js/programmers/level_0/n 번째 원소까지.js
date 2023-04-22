// Lv. 0 n 번째 원소까지

/**
 * @param {number[]} num_list 정수 리스트
 * @param {number} n 정수
 * @returns {number[]} `num_list`의 첫 번째 원소부터 `n`번째 원소까지의 모든 원소를 담은 리스트
 */

const solution = (num_list, n) => {
    return num_list.slice(0, n);
};

// test cases
console.log(solution([2, 1, 6], 1)); // [2]
console.log(solution([5, 2, 1, 7, 5], 3)); // [5,2,1]
