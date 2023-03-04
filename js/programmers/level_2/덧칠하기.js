// Lv. 2 덧칠하기

/**
 * @param {number} n 페인트가 칠해진 벽의 길이
 * @param {number} m 롤러의 길이
 * @param {number[]} section 다시 페인트를 칠하기로 정한 구역들의 번호가 담긴 배열
 * @returns {number} 롤러로 페인트칠해야 하는 최소 횟수
 */

const solution = (n, m, section) => {
    let count = 0;
    let current = -Infinity;

    for (let i = 0; i < section.length; i++) {
        if (section[i] > current + m - 1) {
            count++;
            current = section[i];
        }
    }

    return count;
};

// test cases
console.log(solution(8, 4, [2, 3, 6])); // 2
console.log(solution(5, 4, [1, 3])); // 1
console.log(solution(4, 1, [1, 2, 3, 4])); // 4
