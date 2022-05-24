// 완주하지 못한 선수
function solution(participant, completion) {
    const p = participant.sort();
    const c = completion.sort();
    const buffer = [];

    while (true) {
        if (p[p.length - 1] !== c[c.length - 1]) {
            buffer.push(p[p.length - 1]);
            p.pop();
        } else {
            p.pop();
            c.pop();
        }

        if (buffer.length >= 1) break;
    }

    return buffer[0];
}
