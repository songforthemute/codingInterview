// Lv. 0 문자열 뒤집기

/**
 * @param {string} my_string 문자열
 * @param {number} s 정수
 * @param {number} e 정수
 * @returns {string} my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열
 */

const solution = (my_string, s, e) => {
    return (
        my_string.slice(0, s) +
        [...my_string]
            .slice(s, e + 1)
            .reverse()
            .join("") +
        my_string.slice(e + 1)
    );
};

// test cases
console.log(solution("Progra21Sremm3", 6, 12)); // "ProgrammerS123"
console.log(solution("Stanley1yelnatS", 4, 10)); // "Stanley1yelnatS"
