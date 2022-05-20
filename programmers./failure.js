// 실패율
function solution(N, stages) {
    let result = [];
    let failure = [];
    let players = stages.length;
    let stg = {};

    for (const stage of stages) !stg[stage] ? (stg[stage] = 1) : stg[stage]++;
    for (let i = 1; i <= N; i++) {
        if (stg[i]) {
            failure.push([i, stg[i] / players]);
            players -= stg[i];
        } else failure.push([i, 0]);
    }

    failure
        .sort((a, b) => {
            return a[1] === b[1] ? a[0] - b[0] : b[1] - a[1];
        })
        .forEach((e) => result.push(e[0]));

    return result;
}
