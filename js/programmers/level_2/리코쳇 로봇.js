// Lv. 2 리코쳇 로봇

/**
 * @param {string[]} board 게임판의 상태를 나타내는 문자열 배열
 * @returns {number} 말이 목표위치에 도달하는데 최소 몇 번 이동해야 하는지
 */

function solution(board) {
    board = board.map((row) => row.split(""));

    const [rows, cols] = [board.length, board[0].length];
    const dirs = {
        x: [-1, 1, 0, 0],
        y: [0, 0, -1, 1],
    };

    let cost = 0;
    const queue = [];

    // search starting point
    board.forEach((row, i) => {
        row.forEach((elem, j) => {
            if (elem === "R") queue.push([i, j]);
            if (queue.length) return;
        });

        if (queue.length) return;
    });

    const isValid = (x, y) => {
        return 0 <= x && x < rows && 0 <= y && y < cols && board[x][y] !== "D";
    };

    // around by using BFS
    // but check if visited where arrived cell
    board[queue[0][0]][queue[0][1]] = null;

    while (queue.length) {
        const { length: len } = queue;

        for (let i = 0; i < len; i++) {
            const [cx, cy] = queue.shift();

            // check candidates from current cell
            for (let j = 0; j < 4; j++) {
                let [dx, dy] = [cx + dirs.x[j], cy + dirs.y[j]];

                // slide till meeting the wall
                while (isValid(dx, dy)) {
                    dx += dirs.x[j];
                    dy += dirs.y[j];
                }

                // reverse a step cause while loop
                dx -= dirs.x[j];
                dy -= dirs.y[j];

                // check if arrived
                if (board[dx][dy] === "G") {
                    return ++cost;
                }

                // processing visited
                if (board[dx][dy] !== null) {
                    board[dx][dy] = null;
                    queue.push([dx, dy]);
                }
            }
        }

        cost++;
    }

    return -1;
}

// Test
console.log(solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."])); // 7
console.log(solution([".D.R", "....", ".G..", "...D"])); // -1
