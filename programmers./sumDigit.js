// 자릿수 더하기
function solution(n) {
    let result = 0;

    for (const char of String(n)) result += Number(char);

    return result;
}
