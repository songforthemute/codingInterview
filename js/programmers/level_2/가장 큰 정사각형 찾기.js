// Lv. 2 가장 큰 정사각형 찾기

/**
 * @param {number[][]} board 1과 0으로 채워진 표
 * @returns {number} 1로 이루어진 가장 큰 정사각형의 넓이
 */

const solution = (board) => {
    const rowLen = board.length;
    const colLen = board[0].length;

    if (rowLen === 1 || colLen === 1) return board[0][0];

    let max = 0;

    for (let row = 1; row < rowLen; row++) {
        for (let col = 1; col < colLen; col++) {
            if (board[row][col]) {
                let temp =
                    1 +
                    Math.min(
                        board[row - 1][col - 1],
                        board[row - 1][col],
                        board[row][col - 1]
                    );

                board[row][col] = temp;

                if (max < temp) max = temp;
            }
        }
    }

    return max ** 2;
};

// test cases
console.log(
    solution([
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 0, 1, 0],
    ])
); // 9

console.log(
    solution([
        [0, 0, 1, 1],
        [1, 1, 1, 1],
    ])
); // 4

console.log(
    solution([
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 0, 1],
        [0, 0, 1, 0],
    ])
); // 4

console.log(
    solution([
        [0, 0, 0, 1, 1, 1],
        [0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
    ])
); // 16
