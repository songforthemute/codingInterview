// Lv. 0 2의 영역

/**
 * @param {number[]} arr 정수 배열
 * @returns {number[]} 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열
 */

const solution = (arr) => {
    return arr.indexOf(2) === -1
        ? [-1]
        : arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);
};

// test cases
console.log(solution([1, 2, 1, 4, 5, 2, 9])); // [2,1,4,5,2]
