// Lv. 2 게임 맵 최단거리

/**
 * @param {number[][]} maps n * m 크기의 게임 맵의 상태가 들어있는 2차원 배열
 * @return {number} 캐릭터가 상대 팀 진영에 도착하기 위해 지나가야 하는 칸의 개수의 최솟값
 */

const solution = (maps) => {
    const queue = [[maps.length - 1, maps[0].length - 1, 1]];
    const getDirections = (x, y) => [
        [x - 1, y],
        [x, y - 1],
        [x + 1, y],
        [x, y + 1],
    ];

    while (queue.length > 0) {
        const [x, y, cumulative] = queue.shift();

        for (const direction of getDirections(x, y)) {
            const [x, y] = direction;

            if (x + y === 0) {
                return cumulative + 1;
            }

            if (maps[x] && maps[x][y] === 1) {
                maps[x][y] = 0;
                queue.push([x, y, cumulative + 1]);
            }
        }
    }

    return -1;
};

let a = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1],
];
console.log(solution(a));
