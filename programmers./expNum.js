// 숫자의 표현
function solution(n) {
    if (n === 1 || n === 2) return 1;

    let count = 1;
    let i = 0;
    let start = 1;
    let sum = 0;

    while (true) {
        if (sum === n) {
            i = ++start;
            sum = 0;
            count++;
        } else if (sum > n) {
            i = ++start;
            sum = 0;
        } else sum += ++i;

        if (i > Math.ceil(n / 2)) break;
    }
    return count;
}
