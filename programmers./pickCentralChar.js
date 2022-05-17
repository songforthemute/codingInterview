// 가운데 글자 가져오기
function solution(s) {
    if (s.length % 2 !== 0) return s[(s.length - 1) / 2];
    else return s[s.length / 2 - 1] + s[s.length / 2];
}
