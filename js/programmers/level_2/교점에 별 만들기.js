// Lv.2 교점에 별 만들기

/**
 *
 * @param {number[][]} line
 * @returns {string[]}
 */

function solution(line) {
    function getAcross([A, B, E], [C, D, F]) {
        const divisor = A * D - B * C;
        if (divisor === 0) return null;

        const [x, y] = [(B * F - E * D) / divisor, (E * C - A * F) / divisor];
        return Number.isInteger(x) && Number.isInteger(y) ? [x, y] : null;
    }

    const points = [];
    let minX = Infinity,
        minY = Infinity,
        maxX = -Infinity,
        maxY = -Infinity;

    (function getCombi(arr, start, n, r) {
        if (arr.length === r) {
            const currentAcross = getAcross(...arr.map((v) => line[v]));
            if (currentAcross) {
                maxX = Math.max(maxX, currentAcross[0]);
                minX = Math.min(minX, currentAcross[0]);
                maxY = Math.max(maxY, currentAcross[1]);
                minY = Math.min(minY, currentAcross[1]);
                points.push(currentAcross);
            }
            return;
        }

        for (let i = start + 1; i < n; i++) {
            arr.push(i);
            getCombi(arr, i, n, r);
            arr.pop();
        }
    })([], -1, line.length, 2);

    const res = Array.from({ length: maxY - minY + 1 }, () =>
        Array.from({ length: maxX - minX + 1 }, () => ".")
    );

    points.forEach(([x, y]) => (res[maxY - y][x - minX] = "*"));

    return res.map((col) => col.join(""));
}

// console.log(
//     solution([
//         [2, -1, 4],
//         [-2, -1, 4],
//         [0, -1, 1],
//         [5, -8, -12],
//         [5, 8, 12],
//     ])
// );
console.log(
    solution([
        [0, 1, -1],
        [1, 0, -1],
        [1, 0, 1],
    ])
);
