// Lv. 2 [1차] 프렌즈4블록

/**
 * @param {number} m 판의 높이
 * @param {number} n 판의 폭
 * @param {string[]} board 판의 배치 정보
 * @returns {number}
 */

const solution = (m, n, board) => {
    const matrix = [...board.map((v) => v.split(""))];

    const search = () => {
        let searchResult = false;
        const boom = [];

        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                if (!matrix[i][j]) continue;

                if (
                    matrix[i][j] === matrix[i][j + 1] &&
                    matrix[i][j] === matrix[i + 1][j] &&
                    matrix[i][j] === matrix[i + 1][j + 1]
                ) {
                    boom.push([i, j], [i + 1, j], [i, j + 1], [i + 1, j + 1]);
                }
            }
        }

        if (boom.length) {
            searchResult = true;

            boom.forEach((v) => {
                const [i, j] = v;
                matrix[i][j] = null;
            });
        }

        return searchResult;
    };

    const cleanUp = () => {
        for (let i = 1; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (!matrix[i][j]) {
                    for (let k = i; k >= 1; k--) {
                        [matrix[k][j], matrix[k - 1][j]] = [
                            matrix[k - 1][j],
                            matrix[k][j],
                        ];
                    }
                }
            }
        }
    };

    while (search()) {
        cleanUp();
    }

    return matrix
        .flat()
        .reduceRight((prev, curr) => (curr ? prev : prev + 1), 0);
};

// 테스트케이스
console.log(solution(4, 5, ["AAZXC", "AAZXC", "ZXCAA", "ZXCAA"])); // 8
console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"])); // 14
console.log(
    solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])
); // 15
