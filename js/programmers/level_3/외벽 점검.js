// Lv.3 외벽 점검

/**
 *
 * @param {number} n
 * @param {number[]} weak
 * @param {number[]} dist
 * @returns {number}
 */

function solution(n, weak, dist) {
    const circular = [...weak, ...weak.map((v) => v + n)];

    dist.reverse();

    for (let r = 1; r <= dist.length; r++) {
        for (const permutation of getPermutation(dist, dist.length, r, 0)) {
            for (let i = 0; i < weak.length; i++) {
                let restWeak = circular.slice(i, i + weak.length);

                for (const current of permutation) {
                    const cumulative = restWeak[0] + current;
                    restWeak = restWeak.filter((v) => v > cumulative);

                    if (!restWeak.length) return r;
                }
            }
        }
    }

    return -1;
}

function getPermutation(arr, n, r, depth) {
    if (r === 1) return arr.map((v) => [v]);

    const container = [];

    (function permutate(arr, n, r, depth) {
        if (r === depth) {
            container.push(arr.slice(0, r));
            return;
        }

        for (let i = depth; i < n; i++) {
            [arr[i], arr[depth]] = [arr[depth], arr[i]];
            permutate(arr, n, r, depth + 1);
            [arr[i], arr[depth]] = [arr[depth], arr[i]];
        }
    })(arr, n, r, depth);

    return container;
}

// TEST CASES
console.log(solution(12, [1, 5, 6, 10], [1, 2, 3, 4])); // 2
