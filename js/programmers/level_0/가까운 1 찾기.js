// Lv. 0 가까운 1 찾기

/**
 * @param {number[]} arr 정수 배열
 * @param {number} idx 정수
 * @returns {number} idx보다 크면서 배열의 값이 1인 가장 작은 인덱스, 없다면 -1
 */

const solution = (arr, idx) => {
    return arr.indexOf(1, idx);
};

// test cases
console.log(solution([0, 0, 0, 1], 1)); // 3
console.log(solution([1, 0, 0, 1, 0, 0], 4)); // -1
console.log(solution([1, 1, 1, 1, 0], 3)); // 3
