// Lv. 3 선입 선출 스케줄링

/**
 *
 * @param {number} n 처리해야 될 작업의 개수
 * @param {number[]} cores 각 코어의 처리시간이 담긴 배열
 * @returns {number} 마지막 작업을 처리하는 코어의 번호
 */
function solution(n, cores) {
    if (n <= cores.length) return n;

    // 잔여 작업량
    let rest = n - cores.length;
    // 최솟값: 작업 수행에 있어 가장 짧게 걸리는 시간
    let min = 1;
    // 최댓값: 작업 수행에 있어 가장 오래 걸리는 시간
    // === 가장 긴 작업시간의 코어 * 잔여 작업량 / 코어 개수
    let max = (Math.max(...cores) * rest) / cores.length;

    // 이분 탐색: 범위를 좁혀가며 잔여 작업량을 모두 처리할 수 있는 가장 빠른 시간 구하기
    while (min < max) {
        const median = Math.floor((min + max) / 2);
        // 현재 중위값에서 처리 가능한 작업량
        const wrks = cores.reduceRight(
            (acc, cur) => acc + Math.floor(median / cur),
            0
        );

        wrks < rest // 현재 처리 가능한 작업량이 잔여 작업량보다
            ? (min = median + 1) // 작다면 최소 구간 조정
            : (max = median); // 크거나 같다면 최대 구간 조정
    }

    // 마지막 작업을 처리하는 위치를 구하기 위해 max - 1 시점까지 작업 처리
    for (const core of cores) rest -= Math.floor((max - 1) / core);

    // max 시점에서 모든 작업이 처리되므로,
    // 현재 시점과 코어의 처리 시간이 나누어 떨어지면, 작업을 수행할 수 있으며,
    // 1개 작업을 수행하고, 잔여 작업이 0개인 경우 현재 위치 반환
    for (let i = 0; i < cores.length; i++) {
        if (max % cores[i] === 0) {
            if (--rest === 0) return i + 1;
        }
    }
}

// TEST CASES
console.log(solution(6, [1, 2, 3])); // 2
console.log(solution(7, [1, 2, 3])); // 1
console.log(solution(10, [1, 2, 3, 4])); // 1
