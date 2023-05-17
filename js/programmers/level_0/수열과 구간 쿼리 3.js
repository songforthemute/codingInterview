// Lv. 0 수열과 구간 쿼리 3

/**
 * @param {number[]} arr 정수 배열
 * @param {number[][]} queries 2차원 정수 배열
 * @returns {number[]} query마다 순서대로 arr[i]의 값과 arr[j]의 값을 서로 바꿈에 따라 queries를 처리한 이후의 arr를 return
 */

const solution = (arr, queries) => {
    queries.forEach(([a, b]) => ([arr[a], arr[b]] = [arr[b], arr[a]]));
    return arr;
};

// test cases
console.log(
    solution(
        [0, 1, 2, 3, 4],
        [
            [0, 3],
            [1, 2],
            [1, 4],
        ]
    )
); // [3, 4, 1, 0, 2]
