// 54. Spiral Matrix - Medium

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function (matrix) {
    const result = [];
    const [rLen, cLen] = [matrix.length, matrix[0].length];

    // define the limitations for loop
    let [left, right, top, bot] = [0, cLen - 1, 0, rLen - 1];

    while (left <= right && top <= bot) {
        for (let i = left; i <= right; i++) result.push(matrix[top][i]);

        // adjust top lane to down after accessed current
        top++;

        for (let i = top; i <= bot; i++) result.push(matrix[i][right]);

        // adjust right lane to left after accessed current
        right--;

        // when the number of rows is odd, so access the last row
        if (top <= bot) {
            for (let i = right; i >= left; i--) result.push(matrix[bot][i]);

            // adjust bot lane to up after accessed current
            bot--;
        }

        // when the number of columns is odd, so access the last column
        if (left <= right) {
            for (let i = bot; i >= top; i--) result.push(matrix[i][left]);

            // adjust left lane to right after accessed current
            left++;
        }
    }

    return result;
};
