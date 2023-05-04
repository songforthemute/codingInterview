// Lv. 0 배열의 원소 삭제하기

/**
 * @param {number[]} arr 정수 배열
 * @param {number[]} delete_list 정수 배열
 * @returns {number[]} delete_list의 원소를 모두 삭제하고 남은 원소들은 기존의 arr에 있던 순서를 유지한 배열
 */

const solution = (arr, delete_list) => {
    return arr.filter((v) => !delete_list.includes(v));
};

// test cases
console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12])); // [293, 395, 678]
console.log(solution([110, 66, 439, 785, 1], [377, 823, 119, 43])); // [110, 66, 439, 785, 1]
