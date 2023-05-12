// Lv. 0 등차수열의 특정한 항만 더하기

/**
 * @param {number} a 정수
 * @param {number} b 정수
 * @param {boolean[]} includes 길이가 n인 boolean 배열
 * @returns {number} included[i]가 i + 1항을 의미할 때, 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값
 */

const solution = (a, b, included) => {
    return included.reduce((pre, cur, idx) => pre + (cur ? a + idx * b : 0), 0);
};

// test cases
console.log(solution(3, 4, [true, false, false, true, true])); // 37
console.log(solution(7, 1, [false, false, false, true, false, false, false])); // 10
