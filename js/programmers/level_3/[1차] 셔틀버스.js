// Lv. 3 [1차] 셔틀버스

/**
 * @param {number} n 셔틀 운행 횟수
 * @param {number} t 셔틀 운행 간격
 * @param {number} m 한 셔틀에 탈 수 있는 최대 크루 수
 * @param {string[]} timetable 크루가 대기열에 도착하는 시각을 모은 배열
 * @return {string} 셔틀을 타고 사무실로 갈 수 있는 도착 시간 중 제일 늦은 시각
 */

const solution = (n, t, m, timetable) => {
    const convertTime = (time = "00:00") => {
        let [currHour, currMin] = time.split(":").map((v) => Number(v));
        return currHour * 60 + currMin;
    };
    const revertTime = (time = 0) => {
        let hour = String(Math.floor(time / 60));
        let min = String(time % 60);
        return `${hour.length === 1 ? "0" + hour : hour}:${
            min.length === 1 ? "0" + min : min
        }`;
    };

    let currentTime = 540; // bus is depart at 09:00
    let peoples = timetable
        .map((time) => convertTime(time))
        .sort((a, b) => a - b);

    for (let i = 0; i < n - 1; i++) {
        // check how much people can ride on before departed bus
        const { length } = peoples.filter((time) => time <= currentTime);
        // check whether people were ridden on exceed limit
        const boarded = length >= m ? m : length;

        // renew people lineup cuz boarded people
        peoples = peoples.slice(boarded);
        // next bus
        currentTime += t;
    }

    // filter non-boarding people
    peoples = peoples.filter((time) => time <= currentTime);

    // check if there are more people left than the bus limit
    return revertTime(peoples.length >= m ? peoples[m - 1] - 1 : currentTime);
};

// test cases
console.log(solution(1, 1, 5, ["08:00", "08:01", "08:02", "08:03"])); // 09:00
console.log(solution(2, 10, 2, ["09:10", "09:09", "08:00"])); // 09:09
console.log(solution(2, 1, 2, ["09:00", "09:00", "09:00", "09:00"])); // 08:59
console.log(solution(1, 1, 5, ["00:01", "00:01", "00:01", "00:01", "00:01"])); // 00:00
console.log(solution(1, 1, 1, ["23:59"])); // 09:00
console.log(
    solution(10, 60, 45, [
        "23:59",
        "23:59",
        "23:59",
        "23:59",
        "23:59",
        "23:59",
        "23:59",
        "23:59",
        "23:59",
        "23:59",
        "23:59",
        "23:59",
        "23:59",
        "23:59",
        "23:59",
        "23:59",
    ])
); // 18:00
console.log(solution(1, 10, 3, ["08:55", "08:55", "08:59"])); // 08:58
