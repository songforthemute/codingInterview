// 119. Pascal's Triangle II

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = [1];

    function recursive(row = []) {
        const newRow = Array.from({ length: row.length + 1 }, () => 0)
        let newRowIdx = 1;

        newRow[0] = 1;
        newRow[newRow.length - 1] = 1;

        for (let i = 0; i < row.length - 1; i++) {
            newRow[newRowIdx++] = row[i] + row[i + 1];
        }

        return newRow;
    }

    while (row.length - 1 < rowIndex) {
        row = recursive(row);
    };

    return row;
};

// Test Cases
console.log(
    getRow(3) // [1, 3, 3, 1]
);

console.log(
    getRow(0) // [1]
);

console.log(
    getRow(1) // [1, 1]
);