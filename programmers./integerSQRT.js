// 정수 제곱근 판별
function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}
