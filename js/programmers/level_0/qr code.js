// Lv. 0 qr code

/**
 * @param {number} q 정수
 * @param {number} r 정수
 * @param {string} code 문자열
 * @returns {string} code의 각 인덱스를 q로 나누었을 때 나머지가 r인 위치의 문자를 앞에서부터 순서대로 이어 붙인 문자열
 */

const solution = (q, r, code) => {
    return [...code].reduce(
        (pre, cur, idx) => (idx % q === r ? pre + cur : pre),
        ""
    );
};

// test cases
console.log(solution(3, 1, "qjnwezgrpirldywt")); // "jerry"
