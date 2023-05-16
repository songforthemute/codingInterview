// Lv. 3 기둥과 보 설치

/**
 * @param {number} n 벽면의 크기
 * @param {number[][]} build_frame 기둥과 보를 설치하거나 삭제하는 작업이 순서대로 담긴 2차원 배열
 * @returns {number[][]} 모든 명령어를 수행한 후 구조물의 상태를 return
 */

const solution = (n, build_frame) => {
    // kind: 0 == vertice / 1 == horizon
    // work: 0 == destruct / 1 == construct
    const result = [];

    const checkHorizon = (arr = [], x, y) => {
        const isValid =
            // Existed Vertice under the current
            arr.find(([nx, ny, kind]) => nx === x && ny === y - 1 && !kind) ||
            // Existed Vertice to the endline of Horizon at the current
            arr.find(
                ([nx, ny, kind]) => nx === x + 1 && ny === y - 1 && !kind
            ) ||
            // Existed Horizon in the left and right both sides at the current
            (arr.find(([nx, ny, kind]) => nx === x + 1 && ny === y && kind) &&
                arr.find(([nx, ny, kind]) => nx === x - 1 && ny === y && kind));

        return !!isValid;
    };

    const checkVertice = (arr, x, y) => {
        const isValid =
            // Floor
            y === 0 ||
            // Existed Vertice under the current
            arr.find(([nx, ny, kind]) => nx === x && ny === y - 1 && !kind) ||
            // Existed the endline of horizon at the current
            arr.find(([nx, ny, kind]) => nx === x && ny === y && kind) ||
            // Existed the baseline of horizon at the current
            arr.find(([nx, ny, kind]) => nx === x - 1 && ny === y && kind);

        return !!isValid;
    };

    const construct = (x, y, kind) => {
        if (kind) {
            if (checkHorizon(result, x, y)) result.push([x, y, kind]);
        } else {
            if (checkVertice(result, x, y)) result.push([x, y, kind]);
        }
    };

    const destruct = (x, y, kind) => {
        const dup = [...result];
        const idx = dup.findIndex(
            ([nx, ny, nKind]) => x === nx && y === ny && kind === nKind
        );

        // applying to duplication for testing matrix
        dup.splice(idx, 1);

        // inspect by using duplication
        for (const [nx, ny, nKind] of dup) {
            if (nKind) {
                if (!checkHorizon(dup, nx, ny)) return;
            } else {
                if (!checkVertice(dup, nx, ny)) return;
            }
        }

        // applying to result
        result.splice(idx, 1);
    };

    for (const [x, y, kind, work] of build_frame) {
        work ? construct(x, y, kind) : destruct(x, y, kind);
    }

    return result.sort(([y1, x1, a1], [y2, x2, a2]) => {
        if (y1 !== y2) return y1 - y2;
        if (x1 !== x2) return x1 - x2;
        return a1 - a2;
    });
};

// test cases
console.log(
    solution(5, [
        [1, 0, 0, 1],
        [1, 1, 1, 1],
        [2, 1, 0, 1],
        [2, 2, 1, 1],
        [5, 0, 0, 1],
        [5, 1, 0, 1],
        [4, 2, 1, 1],
        [3, 2, 1, 1],
    ])
); // [[1,0,0],[1,1,1],[2,1,0],[2,2,1],[3,2,1],[4,2,1],[5,0,0],[5,1,0]]

console.log(
    solution(5, [
        [0, 0, 0, 1],
        [2, 0, 0, 1],
        [4, 0, 0, 1],
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [2, 1, 1, 1],
        [3, 1, 1, 1],
        [2, 0, 0, 0],
        [1, 1, 1, 0],
        [2, 2, 0, 1],
    ])
); // [[0,0,0],[0,1,1],[1,1,1],[2,1,1],[3,1,1],[4,0,0]]
