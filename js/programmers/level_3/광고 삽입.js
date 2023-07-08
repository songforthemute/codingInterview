// Lv. 3 광고 삽입

/**
 * @param {string} play_time "죠르디"의 동영상 재생시간 길이
 * @param {string} adv_time 공익광고의 재생시간 길이
 * @param {string[]} logs 시청자들이 해당 동영상을 재생했던 구간 정보
 * @returns {string} 공익광고가 들어갈 시작 시각
 */

function solution(play_time, adv_time, logs) {
    const convert = (time = "00:00:00") => {
        const [h, m, s] = time.split(":").map(Number);
        return s + m * 60 + h * 3600;
    };

    const reformat = (value = 0) => {
        const h = Math.floor(value / 3600);
        const m = Math.floor((value % 3600) / 60);
        const s = (value % 3600) % 60;
        return `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${
            s < 10 ? "0" + s : s
        }`;
    };

    const [play, ad] = [convert(play_time), convert(adv_time)];
    const interval = Array.from({ length: play }, () => 0);

    // record when starting or ending
    for (const log of logs) {
        const [start, end] = log.split("-").map(convert);
        interval[start]++, interval[end]--;
    }

    // first: getting 'viewer' when the timing
    for (let i = 1; i <= play; i++) interval[i] += interval[i - 1];
    // second: getting 'accumulated viewer'
    for (let i = 1; i <= play; i++) interval[i] += interval[i - 1];

    let sum = interval[ad - 1]; // init
    let adStart = 0;

    for (let sec = ad - 1; sec < play; sec++) {
        // if the current timing bigger than previous maximum, record the timing
        // interval[sec] == when ending ad
        // interval[sec - ad] == when starting ad
        if (sum < interval[sec] - interval[sec - ad]) {
            sum = interval[sec] - interval[sec - ad];
            adStart = sec - ad + 1;
        }
    }

    return reformat(adStart);
}

// Test Cases
console.log(
    solution("02:03:55", "00:14:15", [
        "01:20:15-01:45:14",
        "00:40:31-01:00:00",
        "00:25:50-00:48:29",
        "01:30:59-01:53:29",
        "01:37:44-02:02:30",
    ])
); // "01:30:59"

console.log(
    solution("99:59:59", "25:00:00", [
        "69:59:59-89:59:59",
        "01:00:00-21:00:00",
        "79:59:59-99:59:59",
        "11:00:00-31:00:00",
    ])
); // "01:00:00"

console.log(
    solution("50:00:00", "50:00:00", [
        "15:36:51-38:21:49",
        "10:14:18-15:36:51",
        "38:21:49-42:51:45",
    ])
); // "00:00:00"
