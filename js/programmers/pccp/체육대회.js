// [PCCP 모의고사 #1] 체육대회

/**
 * @param {number[][]} ability
 * @returns {number}
 */

function solution(ability) {
    const LIMIT = ability[0].length;
    let max = 0;

    const DFS = (currIdx, arr, rest) => {
        if (arr.length === LIMIT) {
            max = Math.max(
                max,
                arr.reduce((pre, cur) => pre + cur, 0)
            );
            return;
        }

        for (let i = 0; i < rest.length; i++) {
            DFS(
                currIdx + 1,
                [...arr, rest[i][currIdx]],
                rest.filter((_, j) => i !== j)
            );
        }
    };

    for (let i = 0; i < ability.length; i++) {
        DFS(
            1,
            [ability[i][0]],
            ability.filter((_, j) => i !== j)
        );
    }

    return max;
}

console.log(
    solution([
        [40, 10, 10],
        [20, 5, 0],
        [30, 30, 30],
        [70, 0, 70],
        [100, 100, 100],
    ])
); // 210
