// Lv. 2 N-Queen

/**
 * @param {number} n 체스판의 가로 세로의 길이 n
 * @returns {number} `n`개의 퀸이 조건에 만족 하도록 배치할 수 있는 방법의 수
 */

const solution = (n) => {
    const board = Array(n).fill(0);
    let result = 0;

    const checkLines = (curr, index) =>
        curr !== index && // check if locate same row
        board[curr] !== board[index] && // check if locate same column
        Math.abs(board[curr] - board[index]) !== Math.abs(curr - index); // check if locate diagonal

    const DFS = (current) => {
        if (current === n) {
            // complete case
            result++;
            return;
        }

        for (let candidate = 0; candidate < n; candidate++) {
            board[current] = candidate;

            let isAble = true;

            // check this candidate
            for (let index = 0; index < current; index++) {
                if (!checkLines(current, index)) {
                    isAble = false;
                    break;
                }
            }

            if (isAble) DFS(current + 1);
        }
    };

    for (let i = 0; i < n; i++) {
        board[0] = i;
        DFS(1);
    }

    return result;
};

// test cases
console.log(solution(4)); // 2
