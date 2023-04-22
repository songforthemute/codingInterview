// Lv. 0 카운트 업

/**
 * @param {number} start 정수1
 * @param {number} end 정수2
 * @returns {number[]} `start`부터 `end`까지 차례로 담은 리스트를 return
 */

const solution = (start, end) => {
    return Array(end - start + 1)
        .fill(start)
        .map((v, i) => v + i);
};

// test cases
console.log(solution(3, 10)); // [3,4,5,6,7,8,9,10]
