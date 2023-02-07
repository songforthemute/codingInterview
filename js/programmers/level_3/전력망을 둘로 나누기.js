// Lv. 3 전력망을 둘로 나누기

/**
 * @param {number} n 송전탑의 개수
 * @param {number[][]} wires 전선 정보
 * @return {number} 두 전력망이 갖고 있는 송전탑 개수의 차이(절대값)
 */

const solution = (n, wires) => {
    // init union-find
    const find = (root, node) => {
        if (root[node] === node) return node;
        root[node] = find(root, root[node]);
        return root[node];
    };

    const union = (root, a, b) => {
        // get each root of candidates
        const aRoot = find(root, a);
        const bRoot = find(root, b);

        // same root case
        if (aRoot === bRoot) return;

        // compare & union root to more wide side
        aRoot < bRoot ? (root[aRoot] = bRoot) : (root[bRoot] = aRoot);
    };

    let min = Infinity;

    for (const wire of wires) {
        const cutted = wires.filter((v) => v !== wire);
        let tree = new Array(n).fill(0).map((v, i) => i);

        // connect
        cutted.forEach(([a, b]) => union(tree, a - 1, b - 1));

        // adjust tree for separate
        tree = tree.map((v) => find(tree, v));

        min = Math.min(
            min,
            Math.abs(tree.length - tree.filter((v) => v === tree[0]).length * 2)
        );
    }

    return min;
};

// test cases
console.log(
    solution(9, [
        [1, 3],
        [2, 3],
        [3, 4],
        [4, 5],
        [4, 6],
        [4, 7],
        [7, 8],
        [7, 9],
    ])
); // 3

console.log(
    solution(4, [
        [1, 2],
        [2, 3],
        [3, 4],
    ])
); // 0

console.log(
    solution(7, [
        [1, 2],
        [2, 7],
        [3, 7],
        [3, 4],
        [4, 5],
        [6, 7],
    ])
); // 1
