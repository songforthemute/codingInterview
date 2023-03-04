// Lv. 2 빛의 경로 사이클

/**
 * @param {string[]} grid 격자의 정보를 나타내는 1차원 문자열 배열
 * @returns {number[]} 주어진 격자를 통해 만들어지는 빛의 경로 사이클의 모든 길이를 담은 오름차순 배열
 */

const solution = (grid) => {
    const result = [];

    // record
    const visited = [...Array(grid.length)].map(() =>
        [...Array(grid[0].length)].map(() => [...Array(4)].map(() => 0))
    );

    // switching map => S == 0, L == 1, R == 2
    const map = grid.map((x) =>
        x.split("").map((y) => (y === "S" ? 0 : y === "L" ? 1 : 2))
    );

    const changeRow = [-1, 0, 1, 0];
    const changeCol = [0, 1, 0, -1];
    const changeDir = [
        [0, 1, 3], // index == 0, S == 0, L == 1, R == 3
        [1, 2, 0], // index == 1, S == 1, L == 2, R == 0
        [2, 3, 1], // index == 2, S == 2, L == 3, R == 1
        [3, 0, 2], // index == 3, S == 3, L == 0, R == 2
    ];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            for (let k = 0; k < 4; k++) {
                if (visited[i][j][k]) continue;

                let row = i;
                let col = j;
                let dir = k;
                let count = 0;

                while (!visited[row][col][dir]) {
                    visited[row][col][dir] = 1; // check visit

                    dir = changeDir[dir][map[row][col]]; // change direction
                    row += changeRow[dir]; // update row
                    col += changeCol[dir]; // update col

                    if (row >= grid.length) row = 0;
                    else if (row < 0) row = grid.length - 1;

                    if (col >= grid[0].length) col = 0;
                    else if (col < 0) col = grid[0].length - 1;

                    count++;
                }

                if (count !== 0) result.push(count);
            }
        }
    }

    return result.sort((a, b) => a - b);
};

// test cases
console.log(solution(["SL", "LR"])); // [16]
console.log(solution(["S"])); // [1,1,1,1]
console.log(solution(["R", "R"])); // [4,4]
