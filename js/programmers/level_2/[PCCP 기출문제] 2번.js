// Lv. 2 [PCCP 기출문제] 2번

/**
 *
 * @param {number[][]} land
 * @returns {number}
 */

function solution(land) {
    const [rows, cols] = [land.length, land[0].length];
    const visited = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => 0)
    );

    function getDirs(r, c) {
        return [
            [r + 1, c],
            [r - 1, c],
            [r, c + 1],
            [r, c - 1],
        ];
    }

    function isValid(r, c) {
        return 0 <= r && r < rows && 0 <= c && c < cols && land[r][c] === 1;
    }

    let oilIndex = 1;
    const oils = [0];

    function traverse(curR, curC) {
        visited[curR][curC] = oilIndex;

        let amount = 0;
        const stack = [{ r: curR, c: curC }];

        while (stack.length) {
            const { r, c } = stack.pop();

            // 석유를 발견하면 석유의 양++
            if (land[r][c] === 1) amount++;

            // 인접 위치 탐색
            for (const [candR, candC] of getDirs(r, c)) {
                if (isValid(candR, candC) && !visited[candR][candC]) {
                    visited[candR][candC] = oilIndex;
                    stack.push({ r: candR, c: candC });
                }
            }
        }

        // 현재의 인덱스에 해당하는 위치에 발견한 석유의 양 저장
        oils[oilIndex++] = amount;

        return amount;
    }

    // BFS
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (visited[r][c] === 0 && land[r][c] !== 0) {
                traverse(r, c);
            }
        }
    }

    let max = 0;

    // 열을 먼저 고정하고 행을 탐색한다.
    for (let c = 0; c < cols; c++) {
        let sum = 0;
        const set = new Set();

        // 방문한 인덱스를 set에 담아 중복을 처리한다.
        for (let r = 0; r < rows; r++) {
            if (visited[r][c] !== 0) set.add(visited[r][c]);
        }

        // 각각의 인덱스에 해당하는 석유의 합을 구한다.
        for (const it of set) sum += oils[it];

        max = Math.max(max, sum);
    }

    return max;
}

// TEST CASES
console.log(
    solution([
        [0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0],
        [1, 1, 0, 0, 0, 1, 1, 0],
        [1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 1, 1],
    ])
); // 9

console.log(
    solution([
        [0, 1, 1, 1, 1],
        [0, 0, 0, 1, 0],
        [1, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [1, 1, 1, 1, 0],
    ])
); // 12

console.log(
    solution([
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [1, 0, 1, 0],
        [1, 0, 0, 0],
        [1, 1, 1, 1],
    ])
); // 12
