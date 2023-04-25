// Lv. 0 원소들의 곱과 합

/**
 * @param {number[]} num_list 정수가 담긴 리스트
 * @returns {number} 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1, 아니면 0
 */

const solution = (num_list) => {
    return num_list.reduce((pre, acc) => pre * acc, 1) <
        num_list.reduce((pre, cur) => pre + cur, 0) ** 2
        ? 1
        : 0;
};

// test cases
console.log(solution([3, 4, 5, 2, 1])); // 3
console.log(solution([5, 7, 8, 3])); // -11
