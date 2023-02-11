// Lv. 3 합승 택시 요금

/**
 * @param {number} n 지점의 개수
 * @param {number} s 출발 지점
 * @param {number} a `A`의 도착 지점
 * @param {number} b `B`의 도착 지점
 * @param {number[][]} fares 지점 사이의 예상 택시요금 [v1, v2, cost]
 * @return {number} 최저 예상 택시 요금
 */

const solution = (n, s, a, b, fares) => {
    const matrix = new Array(n).fill().map(() => new Array(n).fill(Infinity));

    fares.forEach(([v1, v2, cost]) => {
        matrix[v1 - 1][v2 - 1] = cost;
        matrix[v2 - 1][v1 - 1] = cost;
    });

    matrix.forEach((_, i) => (matrix[i][i] = 0));

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            for (let k = 0; k < matrix.length; k++) {
                matrix[j][k] = Math.min(
                    matrix[j][k],
                    matrix[j][i] + matrix[i][k]
                );
            }
        }
    }

    let result = Infinity;

    for (let inter = 0; inter < n; inter++) {
        result = Math.min(
            result,
            matrix[s - 1][inter] + matrix[inter][a - 1] + matrix[inter][b - 1]
        );
    }

    return result;
};

// test cases
console.log(
    solution(6, 4, 6, 2, [
        [4, 1, 10],
        [3, 5, 24],
        [5, 6, 2],
        [3, 1, 41],
        [5, 1, 24],
        [4, 6, 50],
        [2, 4, 66],
        [2, 3, 22],
        [1, 6, 25],
    ])
); // 82

console.log(
    solution(7, 3, 4, 1, [
        [5, 7, 9],
        [4, 6, 4],
        [3, 6, 1],
        [3, 2, 3],
        [2, 1, 6],
    ])
); // 14

console.log(
    solution(6, 4, 5, 6, [
        [2, 6, 6],
        [6, 3, 7],
        [4, 6, 7],
        [6, 5, 11],
        [2, 5, 12],
        [5, 3, 20],
        [2, 4, 8],
        [4, 3, 9],
    ])
); // 18
