// Lv. 0 부분 문자열 이어 붙여 문자열 만들기

/**
 * @param {string[]} my_strings 길이가 같은 문자열 배열
 * @param {number[][]} parts 이차원 정수 배열
 * @returns {string} 각 my_strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열
 */

const solution = (my_strings, parts) => {
    return parts.reduce(
        (pre, [from, to], idx) => pre + my_strings[idx].slice(from, to + 1),
        ""
    );
};

// test cases
console.log(
    solution(
        ["progressive", "hamburger", "hammer", "ahocorasick"],
        [
            [0, 4],
            [1, 2],
            [3, 5],
            [7, 7],
        ]
    )
); // "programmers"
