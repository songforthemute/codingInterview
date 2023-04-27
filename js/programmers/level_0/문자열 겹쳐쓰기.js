// Lv. 0 문자열 겹쳐쓰기

/**
 * @param {string} my_string 문자열
 * @param {string} overwrite_string 문자열
 * @param {number} s 정수
 * @returns {string} my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열
 */

const solution = (my_string, overwrite_string, s) => {
    return (
        my_string.slice(0, s) +
        overwrite_string +
        my_string.slice(s + overwrite_string.length)
    );
};

// test cases
console.log(solution("He11oWor1d", "lloWorl", 2)); // "HelloWorld"
console.log(solution("Program29b8UYP", "merS123", 7)); // "ProgrammerS123"
