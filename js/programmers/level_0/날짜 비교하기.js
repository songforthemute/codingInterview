// Lv. 0 날짜 비교하기

/**
 * @param {string} date1 정수 배열
 * @param {number[]} date2 정수 배열
 * @returns {string} date1이 date2보다 앞서는 날짜라면 1을, 아니면 0
 */

const solution = ([y1, m1, d1], [y2, m2, d2]) => {
    return +(y1 !== y2 ? y1 < y2 : m1 !== m2 ? m1 < m2 : d1 < d2);
};

// test cases
console.log(solution([2021, 12, 28], [2021, 12, 29])); // 1
