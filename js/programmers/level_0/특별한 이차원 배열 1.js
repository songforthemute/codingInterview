// Lv. 0 특별한 이차원 배열 1

/**
 * @param {number} n 정수
 * @returns {number} n × n 크기의 이차원 배열 arr를 return
 */

const solution = (n) => {
    return Array.from(Array(n), (_, i) =>
        Array(n)
            .fill(0)
            .fill(1, i, i + 1)
    );
};

// test cases
console.log(solution(3)); // [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
console.log(solution(6)); // [[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]]
console.log(solution(1)); // [[1]]
