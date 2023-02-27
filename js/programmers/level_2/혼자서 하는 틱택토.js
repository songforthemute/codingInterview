// Lv. 2 혼자서 하는 틱택토

/**
 * @param {string[]} board 틱택토 게임판의 정보를 담고 있는 문자열 배열
 * @returns {number} 규칙을 지켜서 틱택토를 진행했을 때 나올 수 있는 게임 상황이면 1을 아니라면 0
 */

/**
 * 1. 직선 매치는 두 개 이상 나올 수 있음.
 * 2. 대각선 매치는 하나만 나올 수 있으며, 대각선 매치가 하나 나온 경우 어떠한 매치도 이룰 수 없음.
 */

const solution = (board) => {
    const map = { O: 0, ".": 0, X: 0 };

    board.forEach((v) => v.split("").forEach((w) => map[w]++));

    if (map["."] === 9) return 1; // no marked yet
    if (Math.abs(map["X"] - map["O"]) > 1 || map["X"] > map["O"]) return 0; // who's turn overuse

    // check X Axis
    const xAxis = (() => {
        const x0 = new Set(board[0]).size === 1 ? board[0][0] : null;
        const x1 = new Set(board[1]).size === 1 ? board[1][0] : null;
        const x2 = new Set(board[2]).size === 1 ? board[2][0] : null;

        return [x0, x1, x2].filter((v) => v && v !== ".");
    })();

    if (xAxis.length === 2) return 0;
    if (xAxis.length === 1) {
        if (xAxis[0] === "O") return map["O"] - 1 === map["X"] ? 1 : 0;
        else if (xAxis[0] === "X") return map["O"] === map["X"] ? 1 : 0;
        else return 0;
    }

    // check Y Axis
    const yAxis = (() => {
        const y0 =
            new Set(board.map((v) => v[0])).size === 1 ? board[0][0] : null;
        const y1 =
            new Set(board.map((v) => v[1])).size === 1 ? board[0][1] : null;
        const y2 =
            new Set(board.map((v) => v[2])).size === 1 ? board[0][2] : null;

        return [y0, y1, y2].filter((v) => v && v !== ".");
    })();

    if (yAxis.length === 2) return 0;
    if (yAxis.length === 1) {
        if (yAxis[0] === "O") return map["O"] - 1 === map["X"] ? 1 : 0;
        else if (yAxis[0] === "X") return map["O"] === map["X"] ? 1 : 0;
        else return 0;
    }

    // check Diagonal lines
    const diagonal = (() => {
        const d1 = new Set(board.map((v, i) => v[board.length - 1 - i]));
        const d2 = new Set(board.map((v, i) => v[i]));

        if (d1.size === 1 || d2.size === 1)
            return d1.size === 1 ? [...d1][0] : [...d2][0];

        return null;
    })();

    if (diagonal === "O") return map["O"] - 1 === map["X"] ? 1 : 0;
    else if (diagonal === "X") return map["O"] === map["X"] ? 1 : 0;
    else return 1;
};

// test cases
console.log(solution(["O.X", ".O.", "..X"])); // 1
console.log(solution(["OXX", ".O.", "..O"])); // 1
console.log(solution(["OOO", "...", "XXX"])); // 0
console.log(solution(["...", ".X.", "..."])); // 0
console.log(solution(["...", "...", "..."])); // 1
console.log(solution(["XOX", "OXO", "..."])); // 1
