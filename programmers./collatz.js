// 콜라츠 추측
function solution(num) {
    if (num === 1) return 0;

    let count = 0;
    let dividee = num;

    while (true) {
        if (dividee % 2 === 0) dividee /= 2;
        else dividee = dividee * 3 + 1;
        count++;

        if (count > 500) return -1;
        if (dividee === 1) return count;
    }
}
