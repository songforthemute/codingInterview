// 하샤드 수
function solution(x) {
    let divider = 0;
    const num = String(x);

    for (let i = 0; i < num.length; i++) divider += Number(num[i]);

    return x % divider === 0 ? true : false;
}
