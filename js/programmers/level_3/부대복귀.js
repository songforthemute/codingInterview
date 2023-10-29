// Lv.3 부대복귀

/**
 *
 * @param {number} n 총 지역의 수
 * @param {number[][]} roads 두 지역을 왕복할 수 있는 길 정보
 * @param {number[]} sources 각 부대원이 위치한 서로 다른 지역 정보
 * @param {number} destination 부대 지역
 * @returns {number[]}
 */

function solution(n, roads, sources, destination) {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [from, to] of roads) {
        graph[from].push(to);
        graph[to].push(from);
    }

    // 도착지점부터 각 지점까지의 거리
    const map = Array.from({ length: n + 1 }, () => -1);
    // 도착지점에서 시작하는 경우
    map[destination] = 0;

    const queue = [destination];

    while (queue.length) {
        const cur = queue.shift();

        // 후보지 탐색
        for (const next of graph[cur]) {
            // 방문하지 않은 위치라면
            if (map[next] === -1) {
                // 다음 위치 비용 = 현재 위치까지 누적된 비용 + 1
                // 큐에 다음 후보지 삽입
                map[next] = map[cur] + 1;
                queue.push(next);
            }
        }
    }

    return sources.map((source) => map[source]);
}

// TEST CASES
console.log(
    solution(
        3,
        [
            [1, 2],
            [2, 3],
        ],
        [2, 3],
        1
    )
); // [1,2]
