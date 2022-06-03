// 짝지어 제거하기
function solution(s) {
    if (s.length % 2 !== 0 || s.length === 0) return 0;

    const buffer = [];
    buffer.push(s[0]);

    for (let i = 1; i < s.length; i++) {
        if (buffer[buffer.length - 1] === s[i]) buffer.pop();
        else buffer.push(s[i]);
    }

    return buffer.length === 0 ? 1 : 0;
}
