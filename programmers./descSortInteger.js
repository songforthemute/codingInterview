// 정수 내림차순으로 배치하기
function solution(n) {
    let result = "";
    let arr = [];

    for (const char of String(n)) arr.push(char);

    arr.sort((a, b) => b - a).forEach((e) => (result += e));

    return Number(result);
}
