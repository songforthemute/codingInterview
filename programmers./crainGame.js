// 크레인 인형뽑기 게임

/**
 * @param {number[][]} board
 * @param {number[]} moves
 * @return {number}
 */

const solution = (board, moves) => {
    let count = 0;
    const stack = [];

    for (const turn of moves) {
        let now = turn - 1;
        let x = 0;

        while (x !== board.length) {
            if (board[x][now] !== 0) {
                if (stack.length && stack[stack.length - 1] === board[x][now]) {
                    board[x][now] = 0;
                    stack.pop();
                    count += 2;
                } else {
                    stack.push(board[x][now]);
                    board[x][now] = 0;
                }
                break;
            }

            x++;
        }
    }

    return count;
};
