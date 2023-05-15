// Lv. 3 파괴되지 않은 건물

/**
 * @param {number[]} board 건물의 내구도를 나타내는 2차원 정수 배열
 * @param {number[]} skill 적의 공격 혹은 아군의 회복 스킬을 나타내는 2차원 정수 배열
 * @returns {number} 적의 공격 혹은 아군의 회복 스킬이 모두 끝난 뒤 파괴되지 않은 건물의 개수
 */

const solution = (board, skill) => {
    // init the matrix for prefix sum
    const matrix = Array.from(Array(board.length + 1), () =>
        Array(board[0].length + 1).fill(0)
    );

    // apply commands of parameter for prefix sum
    skill.forEach(([type, r1, c1, r2, c2, degree]) => {
        const sign = type === 1 ? -1 : 1;
        const prefix = sign * degree;

        matrix[r1][c1] += prefix;
        matrix[r2 + 1][c2 + 1] += prefix;

        matrix[r1][c2 + 1] -= prefix;
        matrix[r2 + 1][c1] -= prefix;
    });

    // sum to right
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 1; col < matrix[0].length; col++) {
            matrix[row][col] += matrix[row][col - 1];
        }
    }

    // sum to down
    for (let col = 0; col < matrix[0].length; col++) {
        for (let row = 1; row < matrix.length; row++) {
            matrix[row][col] += matrix[row - 1][col];
        }
    }

    // applying prefix sum to board
    return board.reduce(
        (pre, cur, row) =>
            pre + cur.filter((val, col) => val + matrix[row][col] > 0).length,
        0
    );
};

// test cases
console.log(
    solution(
        [
            [5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5],
        ],
        [
            [1, 0, 0, 3, 4, 4],
            [1, 2, 0, 2, 3, 2],
            [2, 1, 0, 3, 1, 2],
            [1, 0, 1, 3, 3, 1],
        ]
    )
); // 10

console.log(
    solution(
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ],
        [
            [1, 1, 1, 2, 2, 4],
            [1, 0, 0, 1, 1, 2],
            [2, 2, 0, 2, 0, 100],
        ]
    )
); // 6
