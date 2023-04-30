// Lv. 0 배열의 원소만큼 추가하기

/**
 * @param {number[]} arr 양의 정수 배열
 * @returns {number[]} arr의 앞에서부터 차례대로 원소를 보면서 원소가 a라면 X의 맨 뒤에 a를 a번 추가하는 일을 반복한 뒤의 배열 X
 */

const solution = (arr) => {
    return arr.map((v) => Array(v).fill(v)).flat();
};

// test cases
console.log(solution([5, 1, 4])); // [5, 5, 5, 5, 5, 1, 4, 4, 4, 4]
console.log(solution([6, 6])); // [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
console.log(solution([1])); // [1]
