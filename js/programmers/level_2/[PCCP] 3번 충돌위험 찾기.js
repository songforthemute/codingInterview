// Lv.2 [PCCP] 3번 충돌위험 찾기

/**
 *
 * @param {number[][]} points 운송 포인트 `n`개의 좌표를 담은 2차원 정수 배열
 * @param {number[][]} routes 로봇 `x`대의 운송 경로를 담은 2차원 정수 배열
 * @returns {number} 모든 로봇이 운송을 마칠 때까지 발생ㄷ하는 위험한 상황의 횟수
 */

function solution(points, routes) {
    let answer = 0;
    const x = routes.length;
    const m = routes[0].length;

    // 로봇의 위치를 저장하는 배열
    const robots = Array.from({ length: x }, () => ({
        path: [], // 이동 경로
        pathIndex: 0, // 현재 이동 경로 인덱스
        routeIndex: 0, // 현재 경로 인덱스
        done: false, // 이동 완료 여부
    }));

    // 로봇 초기 위치 설정 및 이동 경로 계산
    for (let i = 0; i < x; i++) {
        const startPoint = points[routes[i][0] - 1];

        robots[i].path.push([...startPoint]);
        robots[i].routeIndex = 0;

        for (let j = 0; j < m - 1; j++) {
            const start = points[routes[i][j] - 1];
            const end = points[routes[i][j + 1] - 1];

            calculatePath(start, end, robots[i].path);
        }
    }

    // 시간 별로 로봇 이동 및 충돌 검사
    let time = 0;

    while (robots.some((robot) => !robot.done)) {
        const positions = {};

        for (let i = 0; i < x; i++) {
            if (!robots[i].done) {
                const [r, c] = robots[i].path[robots[i].pathIndex];
                const key = `${r},${c}`;

                positions[key] = (positions[key] || 0) + 1;
                robots[i].pathIndex++;

                if (robots[i].pathIndex >= robots[i].path.length) {
                    robots[i].done = true;
                }
            }
        }

        for (const count of Object.values(positions)) {
            if (count >= 2) answer++;
        }

        time++;
    }

    return answer;
}

// 최단 경로 계산 함수
const calculatePath = (start, end, path) => {
    let [r1, c1] = start;
    const [r2, c2] = end;

    while (r1 !== r2 || c1 !== c2) {
        if (r1 < r2) r1++;
        else if (r1 > r2) r1--;
        else if (c1 < c2) c1++;
        else if (c1 > c2) c1--;

        path.push([r1, c1]);
    }
};

// TCs
console.log(
    solution(
        [
            [3, 2],
            [6, 4],
            [4, 7],
            [1, 4],
        ],
        [
            [4, 2],
            [1, 3],
            [2, 4],
        ]
    )
); // 1
console.log(
    solution(
        [
            [3, 2],
            [6, 4],
            [4, 7],
            [1, 4],
        ],
        [
            [4, 2],
            [1, 3],
            [4, 2],
            [4, 3],
        ]
    )
); // 9
console.log(
    solution(
        [
            [2, 2],
            [2, 3],
            [2, 7],
            [6, 6],
            [5, 2],
        ],
        [
            [2, 3, 4, 5],
            [1, 3, 4, 5],
        ]
    )
); // 0
console.log(
    solution(
        [
            [1, 1],
            [1, 3],
        ],
        [
            [1, 2, 1, 2],
            [2, 1, 2, 1],
        ]
    )
); // 3
console.log(
    solution(
        [
            [1, 1],
            [1, 2],
            [1, 3],
        ],
        [
            [1, 2, 1, 2],
            [3, 1, 2, 3],
        ]
    )
); // 3
console.log(
    solution(
        [
            [1, 1],
            [1, 100],
            [100, 1],
            [100, 100],
        ],
        [
            [1, 2, 4, 3],
            [4, 3, 1, 2],
        ]
    )
); // 0
console.log(
    solution(
        [
            [1, 1],
            [2, 2],
            [3, 3],
        ],
        [
            [1, 2, 1],
            [3, 2, 1],
        ]
    )
); // 3
console.log(
    solution(
        [
            [1, 1],
            [1, 2],
            [1, 3],
        ],
        [
            [2, 1],
            [2, 3],
        ]
    )
); // 1
