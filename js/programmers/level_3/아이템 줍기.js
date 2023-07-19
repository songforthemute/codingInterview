// Lv. 3 아이템 줍기

/**
 * @param {number[][]} rectangle 지형을 나타내는 직사각형이 담긴 2차원 배열
 * @param {number} characterX 초기 캐릭터의 위치
 * @param {number} characterY 초기 캐릭터의 위치
 * @param {number} itemX 아이템의 위치
 * @param {number} itemY 아이템의 위치
 * @returns {number} 캐릭터가 아이템을 줍기 위해 이동해야 하는 가장 짧은 거리
 */

function solution(rectangle, characterX, characterY, itemX, itemY) {
    // able to misdirection cause computer, in processing getting the 4-way coordinations
    // so, needs to the 2x expanded matrix and rest...
    const LEN = 51 * 2;
    const matrix = Array.from({ length: LEN }, () => Array(LEN).fill(null));
    const results = [];

    // init matrix
    for (const [x1, y1, x2, y2] of rectangle) {
        for (let x = x1 * 2; x <= x2 * 2; x++) {
            matrix[x].fill(true, y1 * 2, y2 * 2 + 1);
        }
    }

    // revert inside of matrix, EXCEPT edge
    for (const [x1, y1, x2, y2] of rectangle) {
        for (let x = x1 * 2 + 1; x <= x2 * 2 - 1; x++) {
            matrix[x].fill(null, y1 * 2 + 1, y2 * 2);
        }
    }

    // judge this coord is valid
    const isValid = (x, y) => {
        return 0 <= x && x < LEN && 0 <= y && y < LEN && !!matrix[x][y];
    };

    // get candidates from this coord
    const getDist = (x, y) => {
        return [
            [x - 1, y],
            [x + 1, y],
            [x, y - 1],
            [x, y + 1],
        ];
    };

    const queue = [[characterX * 2, characterY * 2, 0]];

    // BFS recursion by using queue alike Dijkstra
    while (queue.length) {
        const [cX, cY, cost] = queue.shift();

        // if arrived to target
        if (cX === itemX * 2 && cY === itemY * 2) {
            results.push(cost / 2);
            continue;
        }

        // process visiting about this coord
        matrix[cX][cY] = false;

        // getting candidates of coord form current
        for (const [candX, candY] of getDist(cX, cY)) {
            // if this coord is valid
            if (isValid(candX, candY)) {
                queue.push([candX, candY, cost + 1]);
            }
        }
    }

    return Math.min(...results);
}
