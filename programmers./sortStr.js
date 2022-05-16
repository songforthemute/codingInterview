// 문자열 내 마음대로 정렬하기
function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a[n] !== b[n]) return a[n].charCodeAt(0) - b[n].charCodeAt(0);
        else return a.localeCompare(b);
    });
}
