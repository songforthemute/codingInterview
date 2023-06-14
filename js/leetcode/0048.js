// 48. Rotate Image - Medium

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function (matrix) {
    const { length } = matrix;

    // replace each number in matrix by relative to the right-down diagonal
    for (let y = 0; y < length; y++) {
        for (let x = y; x < length; x++) {
            [matrix[y][x], matrix[x][y]] = [matrix[x][y], matrix[y][x]];
        }
    }

    // replace each number in matrix by relative to the centre of the array
    for (let y = 0; y < length; y++) {
        for (let x = 0; x < length / 2; x++) {
            [matrix[y][x], matrix[y][length - x - 1]] = [
                matrix[y][length - x - 1],
                matrix[y][x],
            ];
        }
    }
};
