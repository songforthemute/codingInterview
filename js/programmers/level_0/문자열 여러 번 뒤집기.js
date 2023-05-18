// Lv. 0 문자열 여러 번 뒤집기

/**
 * @param {string} my_string 문자열
 * @param {number[][]} queries 이차원 정수 배열
 * @returns {string} my_string에 queries의 명령을 순서대로 처리한 후의 문자열
 */

const solution = (my_string, queries) => {
    let result = [...my_string];

    queries.forEach(([s, e]) => {
        result = [
            ...result.slice(0, s),
            ...result.slice(s, e + 1).reverse(),
            ...result.slice(e + 1),
        ];
    });

    return result.join("");
};

// test cases
console.log(
    solution("rermgorpsam", [
        [2, 3],
        [0, 7],
        [5, 9],
        [6, 10],
    ])
); // "programmers"
