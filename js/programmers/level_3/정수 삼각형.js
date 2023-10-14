// Lv.3 정수 삼각형

/**
 * @param {number[][]} triangle 삼각형의 정보가 담긴 배열
 * @returns {number} 거쳐간 숫자의 최댓값
 */

/**
 * 꼭대기 -> 바닥
 * 대각선 방향으로 한칸 오른쪽 또는 왼쪽으로만 이동 가능
 *
 * 직각 삼각형이라고 생각한다면? => 아랫칸으로 이동할때 현재 인덱스 or 현재 인덱스 + 1의 위치 이동 가능
 */

function solution(triangle) {
    for (let i = triangle.length - 1; i > 0; i--) {
        for (let j = 0; j < triangle[i].length - 1; j++) {
            // 이전 층의 현재 인덱스에 올 수 있는 값
            // === 다음 층의 현재 인덱스 || 다음 층의 현재 인덱스 + 1
            triangle[i - 1][j] += Math.max(triangle[i][j], triangle[i][j + 1]);
        }
    }

    return triangle[0][0];
}
