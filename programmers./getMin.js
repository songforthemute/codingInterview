// 최솟값 만들기
function solution(A, B) {
    let result = 0;
    const arr1 = A.sort((a, b) => a - b);
    const arr2 = B.sort((a, b) => b - a);

    for (let i = 0; i < A.length; i++) result += arr1[i] * arr2[i];

    return result;
}
