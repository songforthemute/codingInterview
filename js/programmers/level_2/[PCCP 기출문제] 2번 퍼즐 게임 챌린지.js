// Lv.2 [PCCP 기출문제] 2번 퍼즐 게임 챌린지

/**
 * 스프레드 연산자는 콜스택에 배열을 펼치는데,
 * 일반적으로 JS 맥시멈 콜스택은 10k~20k.
 * 따라서 스프레드 연산자를 사용할 때는 주의할 필요가 있음.
 */

/**
 *
 * @param {number[]} diffs 퍼즐의 난이도를 순서대로 담은 정수 배열
 * @param {number[]} times 퍼즐의 소요 시간을 순서대로 담은 정수 배열
 * @param {number} limit 전체 제한 시간
 * @returns {number} 제한 시간 내에 퍼즐을 모두 해결하기 위한 숙련도의 최솟값
 */

// 현재 퍼즐의 소요 시간 `time_cur`
// 이전 퍼즐의 소요 시간 `time_prev`
// 숙련도 `level`
// 제한 시간 안에만 풀면 된다?

// 퍼즐 틀리는 횟수 = 현재 난이도 - 현재 숙련도
// 퍼즐 틀리는 횟수 <= 0 이면 현재 소요 시간만 사용
// 퍼즐 틀리는 횟수 >= 1 이면 현재 소요 시간 + 틀리는 횟수 * 이전 퍼즐을 다시 풀고 오는 시간

// 이전 퍼즐을 다시 풀고 오는 시간 구하기?

const solution = (diffs, times, limit) => {
    const getPrevTime = (curIdx = 0, incorrection = 0) => {
        return !curIdx
            ? times[curIdx]
            : incorrection * (times[curIdx - 1] + times[curIdx]) +
                  times[curIdx];
    };

    // 숙련도 오름차순
    let st = Infinity;
    let end = -Infinity;

    for (let i = 0; i < diffs.length; i++) {
        st = Math.min(st, diffs[i]);
        end = Math.max(end, diffs[i]);
    }

    let min = Infinity;

    while (st <= end) {
        let level = Math.floor((st + end) / 2);
        let sum = 0;
        let skip = false;

        for (let i = 0; i < diffs.length; i++) {
            const diff = diffs[i];
            const incorrection = Math.max(0, diff - level);

            sum += getPrevTime(i, incorrection);

            if (sum > limit) {
                skip = true;
                break;
            }
        }

        if (!skip && sum <= limit) {
            min = Math.min(min, level);
            end = level - 1;
        } else {
            st = level + 1;
        }
    }

    return min;
};

// TCs
console.log(solution([1, 5, 3], [2, 4, 7], 30)); // 3
console.log(solution([1, 4, 4, 2], [6, 3, 8, 2], 59)); // 2
console.log(solution([1, 328, 467, 209, 54], [2, 7, 1, 4, 3], 1723)); // 294
console.log(
    solution([1, 99999, 100000, 99995], [9999, 9001, 9999, 9001], 3456789012)
); // 39354
