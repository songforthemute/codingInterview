// 200. Number of Islands
const numIslands = (grid) => {
    let result = 0;

    const DFS = (x, y) => {
        // 탐색 범위 초과 || 더 이상 섬이 이어지지 않는 경우 리턴
        if (
            x < 0 ||
            y < 0 ||
            x >= grid.length ||
            y >= grid[0].length ||
            grid[x][y] === "0"
        )
            return;

        grid[x][y] = "0";

        DFS(x - 1, y);
        DFS(x + 1, y);
        DFS(x, y - 1);
        DFS(x, y + 1);
    };

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // 섬을 발견한 경우,
            if (grid[i][j] === "1") {
                result++; // 결과값++
                DFS(i, j); // 인접한 섬 제거
            }
        }
    }

    return result;
};
