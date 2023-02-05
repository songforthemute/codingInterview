// Lv. 2 배달

/**
 * @param {number} N 마을의 개수
 * @param {number[][]} road 각 마을을 연결하는 도로의 정보
 * @param {number} K 음식 배달이 가능한 시간
 * @return {number}
 */

/**
 * N개의 마을 중, K 시간 이하로 배달이 가능한 마을에서만 주문을 받음.
 */

function solution(N, road, K) {
    if (N === 1) return 1; // edge case: a single village

    const graph = new Map();

    // initialize graph for dijkstra algorithm
    road.forEach(([v1, v2, cost]) => {
        if (graph.has(v1)) graph.set(v1, [...graph.get(v1), [v2, cost]]);
        else graph.set(v1, [[v2, cost]]);

        if (graph.has(v2)) graph.set(v2, [...graph.get(v2), [v1, cost]]);
        else graph.set(v2, [[v1, cost]]);
    });

    // check visit / cumulative costs / queue for dijkstra algorithm
    const visited = new Array(N).fill(false).fill(true, 0, 1);
    const costs = new Array(N).fill(K + 1, 0, 1);
    const queue = [[1, 0]];

    // execute
    while (queue.length) {
        const [curr, currCost] = queue.shift();

        visited[curr] = true;
        costs[curr] = costs[curr] ? Math.min(costs[curr], currCost) : currCost;

        graph.get(curr).forEach(([next, nextCost]) => {
            // if visit yet
            if (!visited[next]) queue.push([next, currCost + nextCost]);
            // if lower than already exist cost
            else {
                if (costs[next] > currCost + nextCost) {
                    costs[next] = currCost + nextCost;
                    queue.push([next, currCost + nextCost]);
                }
            }
        });
    }

    return costs.reduce(
        (cumulative, cost) => (cost <= K ? cumulative + 1 : cumulative),
        0
    );
}

// test cases
console.log(
    solution(
        5,
        [
            [1, 2, 1],
            [2, 3, 3],
            [5, 2, 2],
            [1, 4, 2],
            [5, 3, 1],
            [5, 4, 2],
        ],
        3
    )
); // 4

console.log(
    solution(
        6,
        [
            [1, 2, 1],
            [1, 3, 2],
            [2, 3, 2],
            [3, 4, 3],
            [3, 5, 2],
            [3, 5, 3],
            [5, 6, 1],
        ],
        4
    )
); // 4

console.log(
    solution(
        5,
        [
            [1, 2, 4],
            [1, 3, 1],
            [3, 4, 1],
            [4, 2, 1],
            [2, 5, 1],
        ],
        4
    )
); // 5
