// Lv. 0 리스트 자르기

/**
 * @param {number} n 정수
 * @param {number[]} slicer 정수 3개가 담긴 리스트
 * @param {number[]} num_list 정수 여러 개가 담긴 리스트
 * @returns {number[]} 올바르게 슬라이싱한 리스트
 */

const solution = (n, [a, b, c], num_list) => {
    switch (n) {
        case 1:
            return num_list.slice(0, b + 1);
        case 2:
            return num_list.slice(a);
        case 3:
            return num_list.slice(a, b + 1);
        default:
            return num_list.slice(a, b + 1).filter((_, i) => i % c === 0);
    }
};

// test cases
console.log(solution(3, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])); // [2,3,4,5,6]
