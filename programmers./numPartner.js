// Lv.1 숫자 짝꿍

function solution(X, Y) {
    const obj = {};
    const valid = {};

    for (const x of X) {
        if (!obj[x]) obj[x] = 1;
        else obj[x]++;
    }

    for (const y of Y) {
        if (obj[y] && obj[y] > 0) {
            obj[y]--;

            if (!valid[y]) valid[y] = 1;
            else valid[y]++;
        }
    }

    if (!Object.keys(valid).length) return "-1";
    else if (Object.keys(valid)[Object.keys(valid).length - 1] === "0")
        return "0";

    let result = "";

    for (const n in valid) {
        result = n.repeat(valid[n]) + result;
    }

    return result;
}
