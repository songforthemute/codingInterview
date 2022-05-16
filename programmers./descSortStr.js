// 문자열 내림차순으로 배치하기
function solution(s) {
    return s
        .split("")
        .sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))
        .join("");
}
