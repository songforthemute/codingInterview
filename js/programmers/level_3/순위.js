// Lv. 3 순위

/**
 * @param {number} n 선수의 수
 * @param {number[][]} results 경기 결과를 담은 2차원 배열 [A, B]: A가 B를 이김
 * @returns {number} 정확하게 순위를 매길 수 있는 선수의 수
 */

const solution = (n, results) => {
    if (n <= 2) return n;

    // init for floyd-warshall
    const graph = Array.from(Array(n), () => Array(n).fill(null));

    // save win/lose data
    results.forEach(([win, lose]) => {
        graph[win - 1][lose - 1] = 1; // 1 === win
        graph[lose - 1][win - 1] = -1; // -1 === lose
    });

    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            for (let z = 0; z < n; z++) {
                // to avoid (null && null) || all indexes same case
                if (graph[y][z] || (x === y && y === z)) continue;
                // // (y => x) And (x => z), So (y => z)
                if (graph[y][x] === graph[x][z]) graph[y][z] = graph[y][x];
            }
        }
    }

    return graph.filter(
        (player) => player.filter((v) => v === null).length === 1
    ).length;
};

// test cases
console.log(
    solution(5, [
        [4, 3],
        [4, 2],
        [3, 2],
        [1, 2],
        [2, 5],
    ])
); // 2

console.log(
    solution(5, [
        [1, 2],
        [4, 5],
        [3, 4],
        [2, 3],
    ])
); // 5
