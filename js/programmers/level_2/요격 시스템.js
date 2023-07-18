// Lv. 2 요격 시스템

/**
 * @param {number[][]} targets 각 폭격 미사일의 x 좌표 범위 목록
 * @returns {number} 모든 폭격 미사일을 요격하기 위해 필요한 요격 미사일 수의 최솟값
 */

function solution(targets) {
    // sort ascending for searching by greedy
    targets.sort(([_, e1], [__, e2]) => e1 - e2);

    let [prev, count] = [-1, 0];

    // search by greedy
    for (const [s, e] of targets) {
        // current start is bigger than previous end
        if (prev <= s) {
            prev = e;
            count++;
        }
    }

    return count;
}

console.log(
    solution([
        [4, 5],
        [4, 8],
        [10, 14],
        [11, 13],
        [5, 12],
        [3, 7],
        [1, 4],
    ])
); // 3
