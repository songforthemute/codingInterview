// Lv. 3 기지국 설치

/**
 * @param {number} N 아파트의 개수
 * @param {number[]} stations 현재 기지국이 설치된 아파트의 번호가 담긴 1차원 배열
 * @param {number} W 전파의 도달 거리
 * @returns {number} 모든 아파트에 전파를 전달하기 위해 증설해야 할 기지국 개수의 최솟값
 */

const solution = (N, stations, W) => {
    let sum = 0;
    let breakpoint = 1;

    for (const v of stations) {
        sum += Math.ceil((v - W - breakpoint) / (2 * W + 1));
        breakpoint = v + W + 1;
    }

    if (breakpoint <= N) {
        sum += Math.ceil((N - breakpoint + 1) / (2 * W + 1));
    }

    return sum;
};

// 테스트케이스
console.log(solution(4, [1], 2)); // 1
console.log(solution(11, [4, 11], 1)); // 3
console.log(solution(11, [4, 5], 1)); // 3
console.log(solution(11, [2, 7, 10], 1)); // 1
console.log(solution(11, [1, 5, 8, 11], 1)); // 1
console.log(solution(16, [9], 2)); // 3
