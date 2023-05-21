// Lv. 0 수열과 구간 쿼리 1

/**
 * @param {number[]} arr 정수 배열
 * @param {number[][]} queries 2차원 정수 배열
 * @returns {number[]} 규칙에 따라 queries를 처리한 이후의 arr
 */

const solution = (arr, queries) => {
    queries.forEach(([a, b]) => {
        for (let i = a; i <= b; i++) arr[i]++;
    });
    return arr;
};

// test cases
console.log(
    solution(
        [0, 1, 2, 3, 4],
        [
            [0, 3],
            [1, 2],
            [2, 3],
        ]
    )
); // [1,3,4,4,4]
