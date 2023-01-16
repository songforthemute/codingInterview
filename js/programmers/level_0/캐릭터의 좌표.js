// Lv. 0 캐릭터의 좌표

/**
 * @param {string[]} keyinput
 * @param {number[]} board
 * @return {number[]}
 */

const solution = (keyinput, board) => {
    if (keyinput.length === 0) return [0, 0];

    let xAxis = 0;
    let yAxis = 0;
    let xMax = Math.floor(board[0] / 2);
    let yMax = Math.floor(board[1] / 2);

    for (const key of keyinput) {
        if (key === "left" && xAxis > -xMax) {
            xAxis -= 1;
        } else if (key === "right" && xAxis < xMax) {
            xAxis += 1;
        } else if (key === "up" && yAxis < yMax) {
            yAxis += 1;
        } else if (key === "down" && yAxis > -yMax) {
            yAxis -= 1;
        }
    }

    return [xAxis, yAxis];
};
