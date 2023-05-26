// Lv. 0 문자 개수 세기

/**
 * @param {string} my_string 알파벳 대소문자로만 이루어진 문자열
 * @returns {number[]} 순서대로 담은 길이 52의 정수 배열
 */

const solution = (my_string) => {
    const result = Array(52).fill(0);

    [...my_string].forEach((v) =>
        v.charCodeAt(0) > 90
            ? result[v.charCodeAt(0) - 65 - 6]++
            : result[v.charCodeAt(0) - 65]++
    );

    return result;
};

// test cases
console.log(solution("Programmers")); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]
