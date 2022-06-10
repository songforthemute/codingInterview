// 피보나치 수
function solution(n) {
    if (n <= 2) return 1 % dividor;

    const dividor = 1234567;
    let result = 1;
    let prev = 0;

    for (let i = 1; i < n; i++) {
        const buffer = prev % dividor;
        prev = result % dividor;
        result = (result % dividor) + buffer;
    }

    return result % dividor;
}
