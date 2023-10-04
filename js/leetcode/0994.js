// 994. Rotting Oranges

/**
 * @param {number[][]} grid
 * @return {number}
 */

/**
 * 0: 오렌지 없음
 * 1: 오렌지
 * 2: 썩은 오렌지
 *
 * 모두 썩는데 얼마나 걸리는가?
 */
var orangesRotting = function (grid) {
    const getDirs = (r, c) => {
        return [
            [r - 1, c],
            [r + 1, c],
            [r, c - 1],
            [r, c + 1],
        ];
    };

    const queue = [];
    let rest = 0,
        round = 0;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            // 썩은 오렌지 위치를 초기화
            if (grid[r][c] === 2) queue.push([r, c, 0]);
            // 멀쩡한 오렌지 개수 초기화
            else if (grid[r][c] === 1) rest++;
        }
    }

    // BFS -> queue 사용
    while (queue.length && rest) {
        const [curR, curC, mins] = queue.shift();

        // 큐에서 꺼낸 멀쩡한 오렌지 처리
        if (grid[curR][curC] === 1) {
            grid[curR][curC] = 2;
            rest--;
            round = mins;
        }

        // 현재 오렌지 위치로부터 4방향 체크
        for (const [newR, newC] of getDirs(curR, curC)) {
            if (
                0 <= newR &&
                newR < grid.length &&
                0 <= newC &&
                newC < grid[newR].length &&
                grid[newR][newC] === 1 // 썩을 수 있는 오렌지가 있다면
            ) {
                queue.push([newR, newC, mins + 1]);
            }
        }
    }

    return rest ? -1 : round;
};
