// Lv. 0 홀수 vs 짝수

/**
 * @param {number[]} num_list 정수 리스트
 * @returns {number} 가장 첫 번째 원소를 1번 원소라고 할 때, 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값
 */

const solution = (num_list) => {
    return Math.max(
        num_list.filter((v, i) => i % 2).reduce((pre, cur) => pre + cur, 0),
        num_list.filter((v, i) => !(i % 2)).reduce((pre, cur) => pre + cur, 0)
    );
};

// test cases
console.log(solution([4, 2, 6, 1, 7, 6])); // 17
console.log(solution([-1, 2, 5, 6, 3])); // 8
