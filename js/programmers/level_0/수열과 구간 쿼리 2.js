// Lv. 0 수열과 구간 쿼리 2

/**
 * @param {number[]} arr 정수 배열
 * @param {number[][]} queries 2차원 정수 배열 [s, e, k]
 * @returns {number[]} 각 쿼리의 순서에 맞게 답을 저장한 배열을 반환
 */

const solution = (arr, queries) => {
    return queries.map(([s, e, k]) => {
        const a = arr.filter((v, i) => s <= i && i <= e && v > k);

        return a.length ? Math.min(...a) : -1;
    });
};

// test cases
console.log(
    solution(
        [0, 1, 2, 4, 3],
        [
            [0, 4, 2],
            [0, 3, 2],
            [0, 2, 2],
        ]
    )
); // [3, 4, -1]
