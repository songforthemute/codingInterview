// 행렬의 덧셈
function solution(arr1, arr2) {
    const result = arr1;

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) result[i][j] += arr2[i][j];
    }

    return result;
}
