// 자연수 뒤집어 배열로 만들기
function solution(n) {
    const result = [];
    let str = String(n);

    for (let i = str.length - 1; i >= 0; i--) result.push(parseInt(str[i]));

    return result;
}
