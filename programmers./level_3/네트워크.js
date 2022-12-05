// Lv. 3 네트워크

/**
 * @param {number} n
 * @param {number[][]} computers
 * @return {number}
 */

const solution = (n, computers) => {
    let result = 0;
    const visited = new Array(n).fill(false);

    const DFS = (node, index) => {
        visited[index] = true;

        for (let k = 0; k < n; k++) {
            if (index === k || visited[k]) continue;
            if (node[k] === 1) {
                DFS(computers[k], k);
            }
        }
    };

    for (let i = 0; i < n; i++) {
        const node = computers[i];
        const reduce = node.reduceRight((prev, curr) => prev + curr);

        if (visited[i]) continue;
        if (reduce === n) return 1;

        DFS(node, i);

        result++;
    }

    return result;
};
