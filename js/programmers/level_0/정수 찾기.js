// Lv. 0 정수 찾기

/**
 * @param {number[]} num_list 정수 리스트
 * @param {number} n 찾으려는 정수
 * @returns {number} `num_list`안에 n이 있으면 1을, 없으면 0을 반환
 */

const solution = (num_list, n) => {
    return Number(num_list.some((v) => v === n));
};

// test cases
console.log(solution([1, 2, 3, 4, 5], 3)); // 1
console.log(solution([15, 98, 23, 2, 15], 20)); // 0
