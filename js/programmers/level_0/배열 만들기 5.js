// Lv. 0 배열 만들기 5

/**
 * @param {string[]} intStrs 문자열 배열
 * @param {number} k 정수
 * @param {number} s 정수
 * @param {number} l 정수
 * @returns {number[]} 배열 intStrs의 각 원소마다 s번 인덱스에서 시작하는 길이 l짜리 부분 문자열을 잘라내 정수로 변환한 값이 k보다 큰 값들을 담은 배열
 */

const solution = (intStrs, k, s, l) => {
    return intStrs.reduce(
        (pre, cur) =>
            Number(cur.slice(s, s + l)) > k
                ? [...pre, Number(cur.slice(s, s + l))]
                : pre,
        []
    );
};

// test cases
console.log(
    solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5)
); // [56789, 99999]
