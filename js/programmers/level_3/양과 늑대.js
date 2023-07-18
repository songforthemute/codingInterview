// Lv. 3 양과 늑대

/**
 * @param {number[]} info 각 노드에 있는 양 또는 늑대에 대한 정보가 담긴 배열
 * @param {number[][]} edges 2진 트리의 각 노드들의 연결 관계를 담은 2차원 배열
 * @returns {number} 조건에 따라 각 노드를 방문하면서 모을 수 있는 최대 양의 수
 */

function solution(info, edges) {
    let max = 0;
    const graph = Array.from({ length: info.length }, () => []);

    // init single-way graph
    edges.forEach(([from, to]) => graph[from].push(to));

    (function DFS(current, next) {
        let [curNode, sheep, wolve] = current;

        const nextNodes = [...next];
        const curNodeIndex = nextNodes.indexOf(curNode);

        // counting info(elem: boolean)
        console.log(!info[curNode]);
        sheep += !info[curNode];
        wolve += !!info[curNode];

        // game over
        if (sheep <= wolve) return;

        // update maximum
        max = Math.max(max, sheep);

        // if had child nodes, add them
        nextNodes.push(...graph[curNode]);

        // process about visited nodes
        nextNodes.splice(curNodeIndex, 1);

        for (const nextNode of nextNodes) {
            DFS([nextNode, sheep, wolve], nextNodes);
        }
    })([0, 0, 0], [0]);

    return max;
}

// Test Cases
console.log(
    solution(
        [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
        [
            [0, 1],
            [1, 2],
            [1, 4],
            [0, 8],
            [8, 7],
            [9, 10],
            [9, 11],
            [4, 3],
            [6, 5],
            [4, 6],
            [8, 9],
        ]
    )
); // 5

// console.log(
//     solution(
//         [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
//         [
//             [0, 1],
//             [0, 2],
//             [1, 3],
//             [1, 4],
//             [2, 5],
//             [2, 6],
//             [3, 7],
//             [4, 8],
//             [6, 9],
//             [9, 10],
//         ]
//     )
// ); // 5
