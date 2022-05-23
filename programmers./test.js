// 모의고사
function solution(answers) {
    let a = [1, 2, 3, 4, 5],
        b = [2, 1, 2, 3, 2, 4, 2, 5],
        c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let aCounter = 0,
        bCounter = 0,
        cCounter = 0;
    let score = {
        1: 0,
        2: 0,
        3: 0,
    };
    let result = [];

    for (const elem of answers) {
        if (a[aCounter] === elem) score[1]++;
        if (b[bCounter] === elem) score[2]++;
        if (c[cCounter] === elem) score[3]++;
        aCounter++;
        bCounter++;
        cCounter++;
        if (aCounter >= a.length) aCounter = 0;
        if (bCounter >= b.length) bCounter = 0;
        if (cCounter >= c.length) cCounter = 0;
    }

    const top = Math.max(score[1], score[2], score[3]);

    for (const elem in score)
        if (score[elem] === top) result.push(Number(elem));

    return result;
}
