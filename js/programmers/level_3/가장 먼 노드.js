// Lv. 3 가장 먼 노드

/**
 * @param {number} n 노드의 개수
 * @param {[number, number][]} vertex
 * @return {number[]} 회전에 의해 위치가 바뀐 숫자들 중 가장 작은 숫자들을 순서대로 배열에 담아 반환
 */

const solution = (n, vertex) => {
    const candidates = [];
    const graph = new Map();

    // init graph map
    vertex.forEach(([v1, v2]) => {
        if (graph.has(v1)) graph.set(v1, [...graph.get(v1), v2]);
        else graph.set(v1, [v2]);

        if (graph.has(v2)) graph.set(v2, [...graph.get(v2), v1]);
        else graph.set(v2, [v1]);
    });

    // init queue
    const queue = [[1, 1]]; // queue for processing => [current, value]
    const visited = new Array(n + 1).fill(false).fill(true, 0, 2);

    // exec loop
    while (queue.length) {
        const [node, value] = queue.shift(); // extract queue
        const routes = graph.get(node); // get vertex route

        // check current node can progress
        if (routes.every((next) => visited[next])) {
            candidates[value] ? candidates[value]++ : (candidates[value] = 1);
        } else {
            for (const next of routes) {
                if (!visited[next]) {
                    visited[next] = true;
                    queue.push([next, value + 1]);
                }
            }
        }
    }

    // return maximal distance's candidates
    return candidates[candidates.length - 1];
};

// test cases
console.log(
    solution(6, [
        [3, 6],
        [4, 3],
        [3, 2],
        [1, 3],
        [1, 2],
        [2, 4],
        [5, 2],
    ])
); // 3
