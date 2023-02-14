// Lv. 3 경주로 건설

/**
 * @param {number[][]} board 2차원 정사각 배열
 * @return {number} 경주로를 건설하는데 필요한 최소 비용
 */

const solution = (board) => {
    const { length } = board;
    const dp = board.map((row) => row.map(() => Array(4).fill(Infinity))); // init Infinity for getting smaller
    const stack = [
        [0, 0, 0, 0], // start going down
        [0, 0, 1, 0], // start going right
    ]; // x, y, direction, cost

    const getDirection = (x, y) => {
        return [
            [x + 1, y], // down
            [x, y + 1], // right
            [x - 1, y], // up
            [x, y - 1], // left
        ];
    };

    while (stack.length) {
        const [prevX, prevY, prevDir, prevCost] = stack.pop();

        // check able direction
        getDirection(prevX, prevY).forEach(([x, y], currDir) => {
            // if out of bound || places wall
            if (board[x]?.[y] === undefined || board[x][y] === 1) return;

            const currCost = prevCost + (prevDir === currDir ? 100 : 600);

            // if earned cost less than same direction
            if (currCost < dp[x][y][currDir]) {
                dp[x][y][currDir] = currCost;
                stack.push([x, y, currDir, currCost]);
            }
        });
    }

    return Math.min(...dp[length - 1][length - 1]);
};

// test cases
console.log(
    solution([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ])
); // 900

console.log(
    solution([
        [0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 1, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0],
    ])
); // 3800

console.log(
    solution([
        [0, 0, 1, 0],
        [0, 0, 0, 0],
        [0, 1, 0, 1],
        [1, 0, 0, 0],
    ])
); // 2100

console.log(
    solution([
        [0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0],
        [0, 0, 1, 0, 0, 0],
        [1, 0, 0, 1, 0, 1],
        [0, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0],
    ])
); // 3200

console.log(
    solution([
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 1, 1, 1, 1, 0],
        [1, 0, 0, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 0],
    ])
); // 4500

console.log(
    solution([
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 0, 0],
    ])
); // 3000
