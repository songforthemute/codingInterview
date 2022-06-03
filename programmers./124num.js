// 124 나라의 숫자
function solution(n) {
    const box = ["4", "1", "2"];
    let result = "";

    while (n > 0) {
        const rest = n % 3;
        result = box[rest] + result;

        if (rest === 0) n = Math.floor((n - 1) / 3);
        else n = Math.floor(n / 3);
    }

    return result;
}
