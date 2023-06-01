// Lv. 0 배열 만들기 2

/**
 * @param {number} l 정수
 * @param {number} r 정수
 * @returns {number[]} l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열
 */

const solution = (l, r) => {
    const result = [];

    for (let i = l; i <= r; i++) {
        let cur = `${i}`;

        if (cur.match(/^[50]+$/)) result.push(i);
    }

    return result.length ? result : [-1];
};

// test cases
console.log(solution(5, 555)); // [5,50,55,500,505,550,555]
