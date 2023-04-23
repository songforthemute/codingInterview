// Lv. 0 카운트 다운

/**
 * @param {number} start 정수1
 * @param {number} end 정수2
 * @returns {number[]} `start`에서 `end`까지 1씩 감소하는 수들을 차례로 담은 리스트
 */

const solution = (start, end) => {
    return Array(start - end + 1)
        .fill(start)
        .map((v, i) => v - i);
};

// test cases
console.log(solution(10, 3)); // [10,9,8,7,6,5,4,3]
