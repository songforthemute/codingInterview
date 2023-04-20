// Lv. 0 배열 비교하기

/**
 * @param {number[]} arr1 정수 배열1
 * @param {number[]} arr2 정수 배열2
 * @returns {number} arr2가 크다면 -1, arr1이 크다면 1, 같다면 0
 */

const solution = (arr1, arr2) => {
    const first = arr1.reduce((pre, cur) => pre + cur, 0);
    const second = arr2.reduce((pre, cur) => pre + cur, 0);

    if (second > first) return -1;
    else if (second < first) return 1;
    else return 0;
};

// test cases
console.log(solution([49, 13], [70, 11, 2])); // -1
console.log(solution([100, 17, 84, 1], [55, 12, 65, 36])); // 1
console.log(solution([1, 2, 3, 4, 5], [(3, 3, 3, 3, 3)])); // 0
