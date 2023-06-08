// Lv. 0 배열 조각하기

/**
 * @param {number[]} arr 정수 배열
 * @param {number[]} query 정수 배열
 * @returns {number[]} 작업을 마친 후 남은 arr의 부분 배열을 return
 */

function solution(arr, query) {
    return query.reduce(
        (pre, cur, idx) => (idx % 2 ? pre.slice(cur) : pre.slice(0, cur + 1)),
        arr
    );
}

console.log(solution([0, 1, 2, 3, 4, 5], [4, 1, 2])); // [1,2,3]
