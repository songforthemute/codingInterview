// Lv. 2 미로 탈출

/**
 * @param {string[]} maps 미로를 나타낸 문자열 배열
 * @return {number} 미로를 탈출하는데 필요한 최소 시간
 */

const solution = (maps) => {
    const start = [];
    const lever = [];
    const exit = [];

    // get each coord
    maps.forEach((map, row) => {
        const arr = map.split("");

        for (let col = 0; col < arr.length; col++) {
            if (arr[col] === "S") start.push(row, col);
            else if (arr[col] === "L") lever.push(row, col);
            else if (arr[col] === "E") exit.push(row, col);

            if (start.length && lever.length && exit.length) return;
        }
    });

    // init visit graph
    let visited = Array.from(maps, () => Array(maps[0].length).fill(false));

    // get direction candidates
    const getDirs = (r, c) => [
        [r - 1, c],
        [r + 1, c],
        [r, c - 1],
        [r, c + 1],
    ];

    // check candidates
    const isPossible = (r = 0, c = 0) =>
        r >= 0 &&
        r < maps.length &&
        c >= 0 &&
        c < maps[r].length &&
        maps[r][c] !== "X" &&
        !visited[r][c];

    // 1st: Start to Lever
    let queue = [[...start, 0]]; // [r, c, currentTime]

    while (queue.length) {
        const [r, c, curr] = queue.shift();

        if (r === lever[0] && c === lever[1]) {
            queue = [[r, c, curr]];
            break;
        }

        getDirs(r, c)
            .filter((v) => isPossible(...v))
            .forEach(([dr, dc]) => {
                visited[dr][dc] = true;
                queue.push([dr, dc, curr + 1]);
            });
    }

    // 2nd: Lever To Exit
    visited.forEach((v) => v.fill(false));

    while (queue.length) {
        const [r, c, curr] = queue.shift();

        if (r === exit[0] && c === exit[1]) return curr;

        visited[r][c] = true;

        getDirs(r, c)
            .filter((v) => isPossible(...v))
            .forEach(([dr, dc]) => {
                visited[dr][dc] = true;
                queue.push([dr, dc, curr + 1]);
            });
    }

    return -1;
};

// test cases
console.log(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"])); // 16
console.log(solution(["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"])); // -1
