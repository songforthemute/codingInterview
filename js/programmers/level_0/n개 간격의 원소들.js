// Lv. 0 n개 간격의 원소들

/**
 * @param {number[]} num_list 정수 리스트
 * @param {number} n 정수
 * @returns {number} `n`개 간격으로 저장되어있는 원소들을 차례로 담은 리스트
 */

const solution = (num_list, n) => {
    return num_list.filter((_, i) => i % n === 0);
};

// test cases
console.log(solution([4, 2, 6, 1, 7, 6], 2)); // [4,6,7]
console.log(solution([4, 2, 6, 1, 7, 6], 4)); // [4,7]
