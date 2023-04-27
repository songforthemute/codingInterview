// Lv. 0 이어 붙인 수

/**
 * @param {number[]} num_list 정수가 담긴 리스트
 * @returns {number} 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합
 */

const solution = (num_list) => {
    return num_list
        .reduce(
            ([odd, even], cur) =>
                cur % 2 === 1 ? [odd + cur, even] : [odd, even + cur],
            ["", ""]
        )
        .reduce((pre, cur) => +pre + +cur, 0);
};

// test cases
console.log(solution([3, 4, 5, 2, 1])); // 393
console.log(solution([5, 7, 8, 3])); // 581
