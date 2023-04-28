// Lv. 0 뒤에서 5등 위로

/**
 * @param {number[]} num_list 정수로 이루어진 리스트
 * @returns {number[]} num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트
 */

const solution = (num_list) => {
    return num_list.sort((a, b) => a - b).slice(5);
};

// test cases
console.log(solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10])); // [15, 32, 38, 46, 56]
