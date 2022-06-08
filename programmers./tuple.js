// 튜플
function solution(s) {
    const obj = {};
    const result = [];
    const temp = [];
    let buffer = "";

    for (const char of s) {
        const code = char.charCodeAt(0);

        if (code >= 48 && code <= 57) buffer += char;
        else if (buffer !== "") {
            if (!obj[buffer]) obj[buffer] = 0;
            obj[buffer]++;
            buffer = "";
        }
    }

    for (const elem in obj) temp.push([elem, obj[elem]]);

    temp.sort((a, b) => b[1] - a[1]);

    for (const elem of temp) result.push(Number(elem[0]));

    return result;
}
