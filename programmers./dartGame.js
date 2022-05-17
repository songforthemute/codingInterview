// [1차] 다트 게임
function solution(dartResult) {
    const result = [];
    let round = "";

    for (let i = 0; i < dartResult.length; i++) {
        round += dartResult[i];

        if (Number(dartResult[i] + dartResult[i + 1]) === 10)
            round += dartResult[++i];

        if (!dartResult[i + 1] || dartResult[i + 1].match(/[0-9]/)) {
            let score = round[0];

            for (let j = 1; j < round.length; j++) {
                if (round[j] === "0") {
                    score += round[j];
                    continue;
                }

                if (round[j] === "S") score = Number(score);
                else if (round[j] === "D") score = Number(score) ** 2;
                else if (round[j] === "T") score = Number(score) ** 3;

                if (round[j] === "*") {
                    score *= 2;
                    result[result.length - 1] *= 2;
                } else if (round[j] === "#") {
                    score *= -1;
                }
            }

            result.push(score);
            round = "";
        }
    }

    return result.reduce((prev, cur) => prev + cur, 0);
}

console.log(solution("1D2S#10S"));
