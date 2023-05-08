// Lv. 0 배열 만들기 3

/**
 * @param {number[]} arr 정수 배열
 * @param {number[][]} intervals 2개의 구간이 담긴 배열
 * @returns {number[]} arr의 첫 번째 구간에 해당하는 배열과 두 번째 구간에 해당하는 배열을 앞뒤로 붙여 만든 새로운 배열
 */

const solution = (arr, intervals) => {
    return intervals.reduce(
        (pre, [s, e]) => [...pre, ...arr.slice(s, e + 1)],
        []
    );
};

// test cases
console.log(
    solution(
        [1, 2, 3, 4, 5],
        [
            [1, 3],
            [0, 4],
        ]
    )
); // [2,3,4,1,2,3,4,5]
