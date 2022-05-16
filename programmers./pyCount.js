// 문자열 내 p와 y의 개수
function solution(s) {
    let result = 0;
    for (const char of s) {
        if (char.toLowerCase() === "p") result++;
        else if (char.toLowerCase() === "y") result--;
    }

    return result === 0 ? true : false;
}
