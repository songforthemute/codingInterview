// Lv. 2 테이블 해시 함수

/**
 * @param {number[][]} data 테이블의 데이터
 * @param {number} col 해시 함수에 대한 입력
 * @param {number} row_begin 해시 함수에 대한 입력
 * @param {number} row_end 해시 함수에 대한 입력
 * @return {number} 테이블의 해시 값
 */

const solution = (data = [[]], col, row_begin, row_end) => {
    // condition 2: sort asc or desc
    const sorted = data.sort((a, b) =>
        a[col - 1] !== b[col - 1] ? a[col - 1] - b[col - 1] : b[0] - a[0]
    );

    const hashes = [];

    // condition 3: refine by the correct range
    sorted.forEach((row, rowIdx) => {
        if (row_begin > rowIdx + 1) return;
        if (row_end < rowIdx + 1) return;

        hashes.push(
            row.reduce((prev, curr) => prev + (curr % (rowIdx + 1)), 0)
        );
    });

    // condition 4: return value operated bitwise XOR
    return hashes.reduce((prev, curr) => prev ^ curr);
};

// test cases
console.log(
    solution(
        [
            [2, 2, 6],
            [1, 5, 10],
            [4, 2, 9],
            [3, 8, 3],
        ],
        2,
        2,
        3
    )
); // 4
