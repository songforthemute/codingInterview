// 제일 작은 수 제거하기
function solution(arr) {
    if (arr.length <= 1) return [-1];

    const min = Math.min(...arr);

    return arr.filter((e) => e !== min);
}
