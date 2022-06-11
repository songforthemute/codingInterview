// 큰 수 만들기
function solution(number, k) {
    const result = [];
    let idx;
    let start = 0;
    let cnt = number.length - k;

    while (cnt > 0) {
        result.push(-1);

        for (let i = start; i <= number.length - cnt; i++) {
            if (result[result.length - 1] < Number(number[i])) {
                result[result.length - 1] = number[i];
                idx = i + 1;
                if (result[result.length - 1] === "9") break;
            }
        }

        start = idx;
        cnt--;
    }

    return result.join("");
}
