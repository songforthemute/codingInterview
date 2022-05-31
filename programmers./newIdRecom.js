// 신규 아이디 추천
function solution(new_id) {
    let result = new_id.toLowerCase();
    let buffer = "";

    for (const char of result) {
        if (
            (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) ||
            (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) ||
            char === "-" ||
            char === "_" ||
            char === "."
        )
            buffer += char;
    }
    result = buffer;
    buffer = "";

    for (const char of result)
        if (char !== "." || buffer[buffer.length - 1] !== ".") buffer += char;
    result = buffer;

    if (result.startsWith(".")) result = result.slice(1);
    if (result.endsWith(".")) result = result.slice(0, result.length - 1);

    if (result.length < 3) {
        const end = result.length === 0 ? "a" : result[result.length - 1];
        return result + end.repeat(3 - result.length);
    }

    if (result.length > 15) {
        if (result[14] === ".") result = result.slice(0, 14);
        else result = result.slice(0, 15);
    }

    return result;
}
