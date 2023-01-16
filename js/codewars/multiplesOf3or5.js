// 6 kyu: Multiples of 3 or 5
function solution(number) {
    if (number < 3) return 0;

    let result = 0;
    let pointer = 3;

    while (pointer < number) {
        if (pointer % 3 === 0 || pointer % 5 === 0) result += pointer;
        pointer++;
    }

    return result;
}
