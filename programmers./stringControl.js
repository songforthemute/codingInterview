// 문자열 다루기 기본
function solution(s) {
    if (s.length !== 4 && s.length !== 6) return false;
    if (s.match(/[a-zA-Z]/) !== null) return false;
    return true;
}
