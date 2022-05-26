// 크레인 인형뽑기 게임
function solution(board, moves) {
    let match = 0; // 같아서 터진 횟수
    const catched = []; // 뽑은 인형의 바구니
    const box = [];
    let temp = [];
    let row = 0,
        col = 0;

    while (row !== board.length) {
        if (board[col][row] !== 0) temp.push(board[col][row]);
        col++;
        if (col === board.length) {
            col = 0;
            box.push(temp);
            temp = [];
            row++;
        }
    }

    for (let i = 0; i < moves.length; i++) {
        if (box[moves[i] - 1].length > 0) {
            catched.push(box[moves[i] - 1][0]);
            box[moves[i] - 1].shift();
        } else {
            continue;
        }

        if (catched[catched.length - 1] === catched[catched.length - 2]) {
            catched.pop();
            catched.pop();
            match += 2;
        }
    }

    return match;
}
