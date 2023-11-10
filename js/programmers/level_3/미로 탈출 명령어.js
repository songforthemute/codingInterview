// Lv. 3 미로 탈출 명령어

/**
 *
 * @param {number} n
 * @param {number} m
 * @param {number} x
 * @param {number} y
 * @param {number} r
 * @param {number} c
 * @param {number} k
 * @returns {string}
 */
function solution(n, m, x, y, r, c, k) {
    const manhattan = getManhattan(r, c, x, y);

    if (k < manhattan || k % 2 !== manhattan % 2) return "impossible";

    const stack = [[x, y, ""]];

    while (stack.length) {
        const [curX, curY, acc] = stack.pop();

        if (isAbleToArrive(k - acc.length, r, c, curX, curY)) {
            if (isArrive(r, c, curX, curY)) {
                if (k === acc.length) return acc;

                if (1 < curX) stack.push([curX - 1, curY + 1, acc + "u"]);
                if (curY < m) stack.push([curX, curY + 1, acc + "r"]);
                if (1 < curY) stack.push([curX, curY - 1, acc + "l"]);
                if (curX < n) stack.push([curX + 1, curY, acc + "d"]);
            }

            for (const [candX, candY, candAcc] of getDirs(curX, curY, acc)) {
                if (isValid(n, m, candX, candY)) {
                    stack.push([candX, candY, candAcc]);
                }
            }
        }
    }

    return "impossible";
}

const isValid = (n, m, x, y) => 0 < x && x <= n && 0 < y && y <= m;
const isArrive = (r, c, x, y) => x === r && y === c;
const getManhattan = (r, c, x, y) => Math.abs(x - r) + Math.abs(y - c);
// 현재 위치에서 맨하탄 거리를 계산해서, k거리에 맞춰 도착지점에 도착할 수 있는가?
const isAbleToArrive = (k, r, c, x, y) =>
    getManhattan(r, c, x, y) <= k && getManhattan(r, c, x, y) % 2 === k % 2;
// u << r << l << d
const getDirs = (x, y, acc) => [
    [x - 1, y, acc + "u"],
    [x, y + 1, acc + "r"],
    [x, y - 1, acc + "l"],
    [x + 1, y, acc + "d"],
];

// TEST CASES
console.log(solution(3, 4, 2, 3, 3, 1, 5)); // "dllrl"
console.log(solution(10, 10, 10, 1, 1, 10, 18)); // "rrrrrrrrruuuuuuuuu"
console.log(solution(6, 6, 2, 6, 6, 5, 11)); // "ddddllllrrr"
