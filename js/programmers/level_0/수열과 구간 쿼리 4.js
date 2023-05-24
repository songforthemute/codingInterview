// Lv. 0 수열과 구간 쿼리 4

/**
 * @param {number[]} arr 정수 배열
 * @param {number[][]} queries 2차원 정수 배열
 * @returns {number[]} 규칙에 따라 queries를 처리한 이후의 arr를 return
 */

const solution = (arr, queries) => {
    queries.forEach(([s, e, k]) => {
        for (let i = s; i <= e; i++) {
            if (i % k === 0) arr[i]++;
        }
    });
    return arr;
};

// test cases
console.log(
    solution(
        [0, 1, 2, 4, 3],
        [
            [0, 4, 1],
            [0, 3, 2],
            [0, 3, 3],
        ]
    )
); // [3, 2, 4, 6, 4]
