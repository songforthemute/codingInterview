// Lv. 0 길이에 따른 연산

/**
 * @param {number[]} num_list 정수가 담긴 리스트
 * @returns {number} 리스트의 길이가 11 이상이면 리스트의 모든 뭔소의 합, 10 이하이면 모든 원소의 곱
 */

const solution = (num_list) => {
    return num_list.length > 10
        ? num_list.reduce((pre, cur) => pre + cur, 0)
        : num_list.reduce((pre, cur) => pre * cur, 1);
};

// test cases
console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1])); // 51
console.log(solution([2, 3, 4, 5])); // 120
