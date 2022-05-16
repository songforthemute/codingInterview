// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    let result = arr.filter((e) => e % divisor === 0);

    return result.length !== 0 ? result.sort((a, b) => a - b) : [-1];
}
