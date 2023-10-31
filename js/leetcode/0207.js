// 207. Course Schedule

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

var canFinish = function (numCourses, prerequisites) {
    const map = Array.from({ length: numCourses }, () => []);
    const visited = new Set();
    const visiting = new Set();

    prerequisites.forEach(([curr, need]) => {
        if (map[curr]) map[curr].push(need);
        else map[curr] = [need];
    });

    const DFS = (current, visited, visiting) => {
        if (visited.has(current)) return true;
        if (visiting.has(current)) return false;

        // 방문 시작
        visiting.add(current);

        for (let vertex of map[current]) {
            if (DFS(vertex, visited, visiting) === false) return false;
        }

        // 방문 종료
        visiting.delete(current);
        // 방문 기록
        visited.add(current);

        return true;
    };

    for (let i = 0; i < numCourses; i++) {
        if (DFS(i, visited, visiting) === false) return false;
    }

    return true;
};

// TEST CASES
// console.log(
//     canFinish(2, [
//         [1, 0],
//         [0, 1],
//     ])
// );

console.log(
    canFinish(3, [
        [1, 0],
        [0, 2],
        [2, 1],
    ])
);
