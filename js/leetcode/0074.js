// 74. Search a 2D Matrix - Medium

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function (matrix, target) {
    // Search the target range
    for (const row of matrix) {
        // if found the valid range, try the binary search
        if (row[0] <= target && target <= row[row.length - 1]) {
            let [left, right] = [0, row.length - 1];

            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                const median = row[mid];

                if (median === target) return true;
                else if (target < median) right = mid - 1;
                else left = mid + 1;
            }
        }
    }

    return false;
};
