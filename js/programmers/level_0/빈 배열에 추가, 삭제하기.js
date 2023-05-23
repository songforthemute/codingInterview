// Lv. 0 빈 배열에 추가, 삭제하기

/**
 * @param {number[]} arr 정수 배열
 * @param {boolean[]} flag boolean 배열
 * @returns {number[]} flag를 차례대로 순회하며 flag[i]가 true라면 X의 뒤에 arr[i]를 arr[i] × 2 번 추가하고, flag[i]가 false라면 X에서 마지막 arr[i]개의 원소를 제거한 뒤 X를 return
 */

const solution = (arr, flag) => {
    const result = [];
    flag.forEach((v, i) => {
        if (v) {
            for (let j = 0; j < arr[i]; j++) result.push(arr[i], arr[i]);
        } else {
            for (let j = 0; j < arr[i]; j++) result.pop();
        }
    });
    return result;
};

// test cases
console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false])); // [3, 3, 3, 3, 4, 4, 4, 4]
