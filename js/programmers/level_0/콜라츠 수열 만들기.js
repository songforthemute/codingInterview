// Lv. 0 콜라츠 수열 만들기

/**
 * @param {number} n 임의의 1,000 보다 작거나 같은 양의 정수
 * @returns {number[]} 초기값이 n인 콜라츠 수열
 */

const solution = (n) => {
    const result = [n];

    while (result[result.length - 1] !== 1) {
        result[result.length] =
            result[result.length - 1] % 2 === 0
                ? result[result.length - 1] / 2
                : result[result.length - 1] * 3 + 1;
    }

    return result;
};

// test cases
console.log(solution(10)); // [10, 5, 16, 8, 4, 2, 1]
