// Lv. 0 정수를 나선형으로 배치하기

/**
 * @param {number} n 양의 정수
 * @returns {number[][]} n × n 배열에 1부터 n2 까지 정수를 인덱스 [0][0]부터 시계방향 나선형으로 배치한 이차원 배열
 */

function solution(n) {
    const result = Array.from(Array(n), () => Array(n));

    let [start, end] = [0, n - 1];
    let num = 1;

    while (num <= n ** 2) {
        let [x, y] = [start, start];

        for (let i = start; i <= end; i++) {
            result[x][i] = num++;
        }

        y = end;

        for (let i = start + 1; i <= end; i++) {
            result[i][y] = num++;
        }

        x = end;

        for (let i = end - 1; i >= start; i--) {
            result[x][i] = num++;
        }

        y = start;

        for (let i = end - 1; i >= start + 1; i--) {
            result[i][y] = num++;
        }

        start++;
        end--;
    }

    return result;
}

console.log(solution(4)); // [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
