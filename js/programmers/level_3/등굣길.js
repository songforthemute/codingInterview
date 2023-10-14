// Lv.3 등굣길

/**
 * @param {number} m 격자의 크기
 * @param {number} n 격자의 크기
 * @param {number[][]} puddles 물이 잠긴 지역의 좌표를 담은 2차원 배열
 * @returns {number} 오른쪽과 아래쪽으로만 움직여 집에서 학교까지 갈 수 있는 최단경로의 개수를 1,000,000,007로 나눈 나머지
 */

function solution(m, n, puddles) {
    const MOD = 1000000007;
    const map = Array.from({ length: n }, () => Array(m).fill(1));

    // [열번호, 행번호]
    puddles.forEach(([c, r]) => {
        // 1행에 장애물이 위치한 경우, 해당 행의 뒤로 더이상 이동 불가
        if (r === 1) {
            for (let i = c - 1; i < m; i++) {
                map[0][i] = 0;
            }
        }

        // 1열에 장애물이 위치한 경우, 해당 열의 아래로 더이상 이동 불가
        if (c === 1) {
            for (let i = r - 1; i < n; i++) {
                map[i][0] = 0;
            }
        }

        // 장애물 위치 처리
        map[r - 1][c - 1] = 0;
    });

    // 0부터 순회하는 이유: [0, 1], [1, 0] 같은 케이스 존재
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            // 범위 초과 || 장애물 위치
            if (r - 1 < 0 || c - 1 < 0 || map[r][c] === 0) continue;

            // 해당 칸의 좌측 || 상단 체크
            map[r][c] = (map[r][c - 1] + map[r - 1][c]) % MOD;
        }
    }

    return map[n - 1][m - 1];
}
