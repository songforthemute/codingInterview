// Lv. 3 섬 연결하기

/**
 * @param {number} n 섬의 개수
 * @param {number[][]} costs 섬 사이에 다리를 건설하는 비용
 * @return {number} 모든 섬이 통행 가능하게 만드는 데 필요한 최소 비용
 */

const solution = (n, costs) => {
    // init union-find
    const root = new Array(n).fill(0).map((v, i) => i);

    const find = (node) => {
        if (root[node] === node) return node;

        root[node] = find(root[node]);
        return root[node];
    };

    let sum = 0;

    // loop ascending ordered costs
    for (const [v1, v2, cost] of costs.sort((a, b) => a[2] - b[2])) {
        // get each root of candidates
        const r1 = find(v1);
        const r2 = find(v2);

        // same root case
        if (r1 === r2) continue;

        // compare & union root to more wide side
        r1 > r2 ? (root[r1] = r2) : (root[r2] = r1);

        sum += cost;
    }

    return sum;
};

// test cases
console.log(
    solution(4, [
        [0, 1, 1],
        [0, 2, 2],
        [1, 2, 5],
        [1, 3, 1],
        [2, 3, 8],
    ])
); // 4

console.log(
    solution(3, [
        [0, 1, 1],
        [0, 2, 2],
        [1, 2, 5],
    ])
); // 3

console.log(
    solution(7, [
        [2, 3, 7],
        [3, 6, 13],
        [3, 5, 23],
        [5, 6, 25],
        [0, 1, 29],
        [1, 5, 34],
        [1, 2, 35],
        [4, 5, 53],
        [0, 4, 75],
    ])
); // 159
