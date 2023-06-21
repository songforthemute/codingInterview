// 79. Word Search - Medium

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function (board, word) {
    const [rows, cols] = [board.length, board[0].length];

    // for checking if the index is valid
    const isValid = (i, j) => {
        return 0 <= i && i < rows && 0 <= j && j < cols;
    };
    // for get directions from current index
    const getDirs = (i, j) => {
        return [
            [i + 1, j],
            [i - 1, j],
            [i, j + 1],
            [i, j - 1],
        ];
    };

    const DFS = (i, j, charIdx) => {
        // the word around ended
        if (charIdx === word.length) return true;
        // if be not valid, or already visited index, or is not same char
        if (!isValid(i, j) || board[i][j] !== word[charIdx]) return false;
        // check the visited state
        board[i][j] = null;
        // check the current index's direction candidates
        for (const [di, dj] of getDirs(i, j)) {
            if (DFS(di, dj, charIdx + 1)) return true;
        }
        // reset the board
        board[i][j] = word[charIdx];
    };

    // around by DFS
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0] && DFS(i, j, 0)) return true;
        }
    }

    return false;
};
