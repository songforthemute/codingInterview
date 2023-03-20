// Lv. 2 호텔 대실

/**
 * @param {string[][]} book_time 예약 시간이 문자열 형태로 담긴 2차원 배열 [대실 시작 시각, 대실 종료 시각]
 * @return {number} 코니에게 필요한 최소 객실의 수
 */

const solution = (book_time) => {
    if (book_time.length === 1) return 1;

    // convert times to minutes
    const sorting = book_time
        .map((times) =>
            times.map((time) => {
                const [h, m] = time.split(":");
                return 60 * Number(h) + Number(m);
            })
        )
        .sort(([a], [b]) => a - b);

    let occupied = [];
    let max = 0;

    for (const [start, end] of sorting) {
        // There isn't using rooms
        if (!occupied.length) occupied.push(end + 10);
        // Need to check occupied rooms
        else {
            // to filter occupied by current
            occupied = [
                ...occupied.filter((occupying) => occupying > start),
                end + 10,
            ];
        }

        max = Math.max(max, occupied.length);
    }

    return max;
};

// test cases
console.log(
    solution([
        ["15:00", "17:00"],
        ["16:40", "18:20"],
        ["14:20", "15:20"],
        ["14:10", "19:20"],
        ["18:20", "21:20"],
    ])
); // 3
console.log(
    solution([
        ["09:10", "10:10"],
        ["10:20", "12:20"],
    ])
); // 1
console.log(
    solution([
        ["10:20", "12:30"],
        ["10:20", "12:30"],
        ["10:20", "12:30"],
    ])
); // 3
console.log(
    solution([
        ["00:00", "23:49"],
        ["23:49", "23:50"],
        ["23:50", "23:59"],
    ])
); // 3
