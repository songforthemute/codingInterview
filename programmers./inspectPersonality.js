function solution(survey, choices) {
    const result = {
        RT: 0,
        CF: 0,
        JM: 0,
        AN: 0,
    };
    let types = "";
    let i = 0;

    while (i !== survey.length) {
        const now = survey[i][0];

        if (now === "R" || now === "T") {
            if (now === "R") {
                result.RT += choices[i] - 4;
            } else {
                result.RT += -(choices[i] - 4);
            }
        } else if (now === "C" || now === "F") {
            if (now === "C") {
                result.CF += choices[i] - 4;
            } else {
                result.CF += -(choices[i] - 4);
            }
        } else if (now === "J" || now === "M") {
            if (now === "J") {
                result.JM += choices[i] - 4;
            } else {
                result.JM += -(choices[i] - 4);
            }
        } else if (now === "A" || now === "N") {
            if (now === "A") {
                result.AN += choices[i] - 4;
            } else {
                result.AN += -(choices[i] - 4);
            }
        }

        i++;
    }

    for (const type in result) {
        if (result[type] <= 0) {
            types += type[0];
        } else {
            types += type[1];
        }
    }

    return types;
}
