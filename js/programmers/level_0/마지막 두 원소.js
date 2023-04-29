// Lv. 0 마지막 두 원소

/**
 * @param {number[]} num_list 정수 리스트
 * @returns {number[]}
 */

const solution = (num_list) => {
    return num_list[num_list.length - 1] > num_list[num_list.length - 2]
        ? [
              ...num_list,
              num_list[num_list.length - 1] - num_list[num_list.length - 2],
          ]
        : [...num_list, num_list[num_list.length - 1] * 2];
};

// test cases
console.log(solution([2, 1, 6])); // [2,1,6,5]
console.log(solution([5, 2, 1, 7, 5])); // [5, 2, 1, 7, 5, 10]
