// Lv. 0 순서 바꾸기

/**
 * @param {number[]} num_list 정수 리스트
 * @param {number} n 정수
 * @returns {number[]} num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠 n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트
 */

const solution = (num_list, n) => {
    return [...num_list.slice(n), ...num_list.slice(0, n)];
};

// test cases
console.log(solution([2, 1, 6], 1)); // [1,6,2]
console.log(solution([5, 2, 1, 7, 5], 3)); // [7,5,5,2,1]
