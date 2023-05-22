// Lv. 0 이차원 배열 대각선 순회하기

/**
 * @param {number[][]} board 2차원 정수 배열
 * @param {number} k 정수
 * @returns {number} i + j <= k를 만족하는 모든 (i, j)에 대한 board[i][j]의 합
 */

const solution = (board, k) => {
    return board.reduce(
        (pre, cur, i) =>
            pre + cur.reduce((pre, cur, j) => pre + (i + j <= k ? cur : 0), 0),
        0
    );
};

// test cases
console.log(
    solution(
        [
            [0, 1, 2],
            [1, 2, 3],
            [2, 3, 4],
            [3, 4, 5],
        ],
        2
    )
); // 8
