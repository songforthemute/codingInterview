// 없는 숫자 더하기
function solution(numbers) {
    return 45 - numbers.reduce((cur, prev) => prev + cur, 0);
}
