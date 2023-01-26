// Lv. 2 [3차] 방금그곡

/**
 * @param {string} m 네오가 기억한 멜로디를 담은 문자열
 * @param {string[]} musicinfos 방송된 곡의 정보를 담고 있는 배열
 * @return {number} 조건과 일치하는 음악 제목
 */

const toConvertChar = (str) => {
    // convert due to sharp note('#')
    const temp = [];

    for (const char of str) {
        if (char === "#")
            temp[temp.length - 1] = temp[temp.length - 1].toLowerCase();
        else temp.push(char);
    }

    return temp.join("");
};

const solution = (m, musicinfos) => {
    const result = [["(None)", 0, Infinity]]; // init value
    const listened = toConvertChar(m); // convert m

    for (let i = 0; i < musicinfos.length; i++) {
        const [start, end, title, notes] = musicinfos[i].split(",");

        const [fromHour, fromMin] = start.split(":").map((v) => parseInt(v));
        const [endHour, endMin] = end.split(":").map((v) => parseInt(v));

        const playtime = (endHour - fromHour) * 60 + (endMin - fromMin); // convert playtime
        const convertedNotes = toConvertChar(notes); // convert notes due to sharp note

        let playedNotes = ""; // fill notes for fit playtime
        let j = 0;

        while (playedNotes.length < playtime) {
            playedNotes += convertedNotes[j];
            if (++j === convertedNotes.length) j = 0;
        }

        if (playedNotes.includes(listened)) result.push([title, playtime, i]); // check whether played
    }

    // adjust order by priority
    return result.sort((a, b) =>
        a[1] !== b[1] ? b[1] - a[1] : a[2] - b[2]
    )[0][0];
};

// 테스트 케이스들
console.log(
    solution("ABCDEFG", [
        "12:00,12:14,HELLO,CDEFGAB",
        "13:00,13:05,WORLD,ABCDEF",
    ])
); // "HELLO"

console.log(
    solution("CC#BCC#BCC#BCC#B", [
        "03:00,03:30,FOO,CC#B",
        "04:00,04:08,BAR,CC#BCC#BCC#B",
    ])
); // "FOO"

console.log(
    solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"])
); // "WORLD"

console.log(solution("ABC", ["12:00,12:06,HELLO,ABC#ABC#ABC"])); // "(None)"
