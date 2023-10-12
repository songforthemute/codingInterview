// 51. N-Queens

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const res = [];

    const DFS = (board = [], row = 0) => {
        if (row === n) {
            res.push(
                board.map(
                    (boardCol) =>
                        ".".repeat(boardCol) +
                        "Q" +
                        ".".repeat(n - boardCol - 1)
                )
            );
        }

        for (let col = 0; col < n; col++) {
            // 한 행에 하나의 값이 들어가므로, 같은 행 내 체크는 필요 X
            if (
                !board.some(
                    (boardCol, boardRow) =>
                        boardCol === col || // 같은 열 내 체크
                        boardCol + boardRow === col + row || // 좌상/우하향 대각선 체크
                        boardCol - boardRow === col - row // 좌하/우상향 대각선 체크
                )
            ) {
                board.push(col);
                DFS(board, row + 1);
                board.pop();
            }
        }
    };

    DFS();

    return res;
};
