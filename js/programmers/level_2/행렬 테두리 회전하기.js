// Lv. 2 행렬 테두리 회전하기

/**
 * @param {number} rows 행렬의 세로 길이(행 개수)
 * @param {number} columns 행렬의 가로 길이(열 개수)
 * @param {number[][]} queries 회전들의 목록(x1, y1, x2, y2)
 * @return {number[]} 회전에 의해 위치가 바뀐 숫자들 중 가장 작은 숫자들을 순서대로 배열에 담아 반환
 */

const solution = (rows, columns, queries) => {
    const result = [];
    let idx = 1;

    // gene matrix for init
    const matrix = new Array(rows).fill([]).map((_) => {
        let row = [];
        while (row.length < columns) row.push(idx++);
        return row;
    });

    // insert elem to next slot & get next elem
    const swap = (arr, [currRow, currCol], saved) => {
        let temp = arr[currRow][currCol];
        arr[currRow][currCol] = saved;

        return temp;
    };

    // rotate cycle once
    const rotate = (arr, [x1, y1, x2, y2]) => {
        let [fromRow, fromCol] = [x1 - 1, y1 - 1];
        let [toRow, toCol] = [x2 - 1, y2 - 1];
        let buffer = arr[fromRow][fromCol];
        let min = Infinity;

        // go half: rotate y1 => y2
        while (fromCol !== toCol) {
            let temp = swap(arr, [fromRow, ++fromCol], buffer);
            buffer = temp;
            if (min > temp) min = temp;
        }

        // // go half: rotate x1 => x2
        while (fromRow !== toRow) {
            let temp = swap(arr, [++fromRow, fromCol], buffer);
            buffer = temp;
            if (min > temp) min = temp;
        }

        // reconfig for return 'to => from'
        fromRow = x1 - 1;
        fromCol = y1 - 1;

        // return: rotate y2 => y1
        while (toCol !== fromCol) {
            let temp = swap(arr, [toRow, --toCol], buffer);
            buffer = temp;
            if (min > temp) min = temp;
        }

        // return: rotate x2 => x1
        while (toRow !== fromRow) {
            let temp = swap(arr, [--toRow, toCol], buffer);
            buffer = temp;
            if (min > temp) min = temp;
        }

        return min;
    };

    for (const query of queries) {
        result.push(rotate(matrix, query));
    }

    return result;
};

// test cases
console.log(
    solution(6, 6, [
        [2, 2, 5, 4],
        [3, 3, 6, 6],
        [5, 1, 6, 3],
    ])
); // [8, 10, 25]

console.log(
    solution(3, 3, [
        [1, 1, 2, 2],
        [1, 2, 2, 3],
        [2, 1, 3, 2],
        [2, 2, 3, 3],
    ])
); // [8, 10, 25]

console.log(solution(100, 97, [[1, 1, 100, 97]])); // [8, 10, 25]
