// Lv. 3 징검다리 건너기

/**
 * @param {number[]} stones 디딤돌에 적힌 숫자가 순서대로 담긴 배열
 * @param {number} k 한 번에 건너 뛸 수 있는 디딤돌의 최대 칸 수
 * @return {number} 징검다리를 건널 수 있는 최대의 수
 */

const solution = (stones, k) => {
    if (stones.length === 1) return stones[0];

    let left = 1;
    let right = 200000000;

    while (left <= right) {
        let median = Math.floor((left + right) / 2);
        let skip = 0;

        for (let i = 0; i < stones.length; i++) {
            if (stones[i] - median <= 0) {
                if (++skip === k) break;
            } else {
                skip = 0;
            }
        }

        skip === k ? (right = median - 1) : (left = median + 1);
    }

    return left;
};

// 테스트 케이스들
console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)); // 3
console.log(solution([1, 1], 2)); // 1
console.log(solution([9, 1], 2)); // 9
console.log(solution([1, 1, 1, 5, 1, 1], 4)); // 5
