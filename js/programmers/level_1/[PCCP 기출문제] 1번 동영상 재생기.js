// [PCCP 기출문제] 1번 / 동영상 재생기

/**
 *
 * @param {string} video_len 동영상의 길이
 * @param {string} pos 기능 수행 직전의 재생 위치
 * @param {string} op_start 오프닝 시작 시간
 * @param {string} op_end 오프닝 종료 시간
 * @param {string[]} commands 사용자 입력 배열
 * @returns {string}
 */

const solution = (video_len, pos, op_start, op_end, commands) => {
    const getSec = (str = "") => {
        const [mm, ss] = str.split(":").map((v) => +v);
        return mm * 60 + ss;
    };

    const getOriginFormat = (num = 0) => {
        const mm = Math.floor(num / 60);
        const ss = num % 60;
        return `${mm.toString().padStart(2, "0")}:${ss
            .toString()
            .padStart(2, "0")}`;
    };

    const doNext = (current = 0) => {
        return current + 10;
    };

    const doPrev = (current = 0) => {
        return current - 10 >= 0 ? current - 10 : 0;
    };

    const isOnOpening = (stT = 0, endT = 0, curT = 0) => {
        if (stT <= curT && curT <= endT) return endT;
        return curT;
    };

    const total = getSec(video_len);
    const st = getSec(op_start);
    const end = getSec(op_end);

    let cur = isOnOpening(st, end, getSec(pos));

    commands.forEach((command) => {
        switch (command) {
            case "next":
                cur = isOnOpening(st, end, doNext(cur));
                break;
            case "prev":
                cur = isOnOpening(st, end, doPrev(cur));
                break;
            default:
                break;
        }

        if (cur < 0) cur = 0;
        else if (cur > total) cur = total;
    });

    return getOriginFormat(cur);
};

// TCs
console.log(solution("01:03", "00:00", "00:01", "01:02", ["next"]));
