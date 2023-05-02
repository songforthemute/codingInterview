// Lv. 0 뒤에서 5등까지

/**
 * @param {number[]} num_list 정수로 이루어진 리스트
 * @returns {number[]} num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트
 */

const solution = (num_list) => {
    return num_list.sort((a, b) => a - b).slice(0, 5);
};

// test cases
console.log(solution([12, 4, 15, 46, 38, 1, 14])); // [1,4,12,14,15]
