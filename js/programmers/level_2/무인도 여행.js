// Lv. 2 무인도 여행

/**
 * @param {string[]} maps 지도를 나타내는 문자열 배열
 * @return {number[]} 각 섬에서 최대 며칠씩 머무를 수 있는지 오름차순으로 담은 배열
 */

const solution = (maps) => {
    const ROWS_LENGTH = maps.length;
    const COLS_LENGTH = maps[0].length;

    const result = [];

    const isValid = (row, col) =>
        row >= 0 && row < ROWS_LENGTH && col >= 0 && col < COLS_LENGTH;
    const getDirections = (row, col) => [
        [row - 1, col],
        [row + 1, col],
        [row, col - 1],
        [row, col + 1],
    ];

    // convert array
    maps.forEach((map, i) => (maps[i] = map.split("")));

    for (let i = 0; i < ROWS_LENGTH; i++) {
        for (let j = 0; j < COLS_LENGTH; j++) {
            // start finding
            if (maps[i][j] !== "X") {
                let sum = 0;
                const stack = [[i, j]]; // queue of [x, y, currentDays]

                while (stack.length) {
                    const [r, c] = stack.pop(); // get element from queue

                    if (maps[r][c] === "X") continue; // to avoid re-visit

                    sum += Number(maps[r][c]); // memory days of current location
                    maps[r][c] = "X"; // to avoid re-visit

                    for (const [newR, newC] of getDirections(r, c)) {
                        if (!isValid(newR, newC)) continue;
                        if (maps[newR][newC] !== "X") stack.push([newR, newC]);
                    }
                }

                result.push(sum);
            }
        }
    }

    return result.length ? result.sort((a, b) => a - b) : [-1];
};

// test cases
console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"])); // [1, 1, 27]
console.log(solution(["XXX", "XXX", "XXX"])); // [-1]
