// Lv. 3 블록 이동하기

/**
 *
 * @param {number[][]} board
 * @returns {number}
 */
function solution(board) {
    const N = board.length;
    const end = [N - 1, N - 1].join("");
    const visited = new Set();

    const isVisited = (r1, c1, r2, c2) => {
        return (
            visited.has([r1, c1, r2, c2].join(",")) ||
            visited.has([r2, c2, r1, c1].join(","))
        );
    };

    const isValid = (r, c) => {
        return 0 <= r && r < N && 0 <= c && c < N && board[r][c] === 0;
    };

    const getDirs = (r1, c1, r2, c2) => {
        // 가로인 경우(같은 행)
        if (r1 === r2) {
            return [
                [
                    [r1 - 1, c1],
                    [r2 - 1, c2],
                ],
                [
                    [r1 + 1, c1],
                    [r2 + 1, c2],
                ],
                [
                    [r1, c1 - 1],
                    [r2, c2 - 1],
                ],
                [
                    [r1, c1 + 1],
                    [r2, c2 + 1],
                ],
            ];
        }
        // 세로인 경우(같은 열)
        else {
            return [
                [
                    [r1, c1 - 1],
                    [r2, c2 - 1],
                ],
                [
                    [r1, c1 + 1],
                    [r2, c2 + 1],
                ],
                [
                    [r1 - 1, c1],
                    [r2 - 1, c2],
                ],
                [
                    [r1 + 1, c1],
                    [r2 + 1, c2],
                ],
            ];
        }
    };

    const getTurning = (r1, c1, r2, c2) => {
        const dirs = [];
        // 가로인 경우(같은 행)
        if (r1 === r2) {
            if (isValid(r1 - 1, c1) && isValid(r2 - 1, c2)) {
                dirs.push(
                    [
                        [r1, c1],
                        [r1 - 1, c1],
                    ],
                    [
                        [r2, c2],
                        [r2 - 1, c2],
                    ]
                );
            }

            if (isValid(r1 + 1, c1) && isValid(r2 + 1, c2)) {
                dirs.push(
                    [
                        [r1, c1],
                        [r1 + 1, c1],
                    ],
                    [
                        [r2, c2],
                        [r2 + 1, c2],
                    ]
                );
            }
        }
        // 세로인 경우(같은 열)
        else {
            if (isValid(r1, c1 - 1) && isValid(r2, c2 - 1)) {
                dirs.push(
                    [
                        [r1, c1],
                        [r1, c1 - 1],
                    ],
                    [
                        [r2, c2],
                        [r2, c2 - 1],
                    ]
                );
            }

            if (isValid(r1, c1 + 1) && isValid(r2, c2 + 1)) {
                dirs.push(
                    [
                        [r1, c1],
                        [r1, c1 + 1],
                    ],
                    [
                        [r2, c2],
                        [r2, c2 + 1],
                    ]
                );
            }
        }

        return dirs;
    };

    const queue = [[[0, 0], [0, 1], 0]]; // [left, right, cost]

    visited.add("0,0,0,1", "0,1,0,0");

    while (queue.length) {
        const [left, right, cost] = queue.shift();

        if (left.join("") === end || right.join("") === end) {
            return cost;
        }

        // moving candidates + turning candidates
        for (const [candL, candR] of [
            ...getDirs(...left, ...right),
            ...getTurning(...left, ...right),
        ]) {
            if (
                isValid(...candL) &&
                isValid(...candR) &&
                !isVisited(...candL, ...candR)
            ) {
                visited.add(
                    [...candL, ...candR].join(","),
                    [...candR, ...candL].join(",")
                );
                queue.push([candL, candR, cost + 1]);
            }
        }
    }
}

// TEST CASES
console.log(
    solution([
        [0, 0, 0, 1, 1],
        [0, 0, 0, 1, 0],
        [0, 1, 0, 1, 1],
        [1, 1, 0, 0, 1],
        [0, 0, 0, 0, 0],
    ])
); // 7
console.log(
    solution([
        [0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0, 0],
    ])
); // 11
console.log(
    solution([
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ])
); // 18
