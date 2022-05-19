// 3진법 뒤집기
function solution(n) {
    const three = n.toString(3);
    let result = 0;

    for (let i = 0; i < three.length; i++) result += 3 ** i * Number(three[i]);

    return result;
}
