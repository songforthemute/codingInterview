// Lv. 0 특별한 이차원 배열 2

/**
 * @param {number[][]} arr n × n 크기의 이차원 배열
 * @returns {number} 0 ≤ i, j < n인 정수 i, j에 대하여 arr[i][j] = arr[j][i]을 만족하면 1, 아니라면 0
 */

const solution = (arr) => {
    return Number(
        arr.every((_, i) => arr.every((_, j) => arr[i][j] === arr[j][i]))
    );
};

// test cases
console.log(
    solution([
        [5, 192, 33],
        [192, 72, 95],
        [33, 95, 999],
    ])
); // 1
console.log(
    solution([
        [19, 498, 258, 587],
        [63, 93, 7, 754],
        [258, 7, 1000, 723],
        [587, 754, 723, 81],
    ])
); // 0
