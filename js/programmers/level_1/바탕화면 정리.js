// Lv. 1 바탕화면 정리

/**
 * @param {string[]} wallpaper 컴퓨터 바탕화면의 상태를 나타내는 문자열 배열
 * @returns {number[]} 드래그의 시작점과 끝점을 담은 정수 배열(lux, luy, rdx, rdy)
 */

const solution = (wallpaper) => {
    let rows = [],
        cols = [];

    wallpaper.forEach((row, index) => {
        for (let i = 0; i < row.length; i++) {
            if (row[i] === "#") {
                rows.push(index, index + 1);
                cols.push(i, i + 1);
            }
        }
    });

    return [
        Math.min(...rows),
        Math.min(...cols),
        Math.max(...rows),
        Math.max(...cols),
    ];
};

// test cases

console.log(solution([".#...", "..#..", "...#."])); // [0, 1, 3, 4]
console.log(
    solution([
        "..........",
        ".....#....",
        "......##..",
        "...##.....",
        "....#.....",
    ])
); // [1, 3, 5, 8]
console.log(
    solution([
        ".##...##.",
        "#..#.#..#",
        "#...#...#",
        ".#.....#.",
        "..#...#..",
        "...#.#...",
        "....#....",
    ])
); // [0, 0, 7, 9]
console.log(solution(["..", "#."])); // [1, 0, 2, 1]
