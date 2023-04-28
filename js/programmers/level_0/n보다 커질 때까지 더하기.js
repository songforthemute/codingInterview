// Lv. 0 n보다 커질 때까지 더하기

/**
 * @param {number[]} numbers 정수 배열
 * @param {number} n 정수
 * @returns {number} numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합
 */

const solution = (numbers, n) => {
    return numbers.reduce((pre, cur) => (pre > n ? pre : pre + cur), 0);
};

// test cases
console.log(solution([34, 5, 71, 29, 100, 34], 123)); // 139
console.log(solution([58, 44, 27, 10, 100], 139)); // 239
