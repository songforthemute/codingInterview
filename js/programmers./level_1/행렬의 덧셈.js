// Lv. 1 행렬의 덧셈

/**
 *
 * @param {number[][]} arr1
 * @param {number[][]} arr2
 * @returns {number[][]}
 */

function solution(arr1, arr2) {
    const result = arr1;

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) result[i][j] += arr2[i][j];
    }

    return result;
}
