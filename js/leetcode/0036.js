// 36. Valid Sudoku

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const LINE_COUNT = 9;
    const EMPTY = '.';

    function isValidRow(row) {
        const currentRow = board[row];
        const map = {};

        for (let i = 0; i < LINE_COUNT; i++) {
            const currentValue = currentRow[i];

            if (currentValue === EMPTY) continue;

            if (map[currentValue]) {
                return false;
            }

            map[currentValue] = true;
        }

        return true;
    }

    function isValidCol(col) {
        const map = {};

        for (let i = 0; i < LINE_COUNT; i++) {
            const currentValue = board[i][col];

            if (currentValue === EMPTY) continue;

            if (map[currentValue]) {
                return false;
            }

            map[currentValue] = true;
        }

        return true;
    }

    function isValidBox(row, col) {
        const map = {};
        const boxRow = Math.floor(row / 3) * 3;
        const boxCol = Math.floor(col / 3) * 3;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const currentValue = board[boxRow + i][boxCol + j];

                if (currentValue === EMPTY) continue;

                if (map[currentValue]) {
                    return false;
                }

                map[currentValue] = true;
            }
        }

        return true;
    }

    for (let i = 0; i < LINE_COUNT; i++) {
        if (!isValidRow(i) || !isValidCol(i)) {
            return false;
        }

        if (i % 3 !== 0) continue;

        if (!isValidBox(i, 0) || !isValidBox(i, 3) || !isValidBox(i, 6)) {
            return false;
        }
    }

    return true;
};

// Examples
console.log(
    isValidSudoku(
        [["5","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]]
    )
) // true

console.log(
    isValidSudoku(
        [["8","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]]
    )
) // false