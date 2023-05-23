// Lv. 0 글자 지우기

/**
 * @param {string} my_string 문자열
 * @param {number[]} indices 정수 배열
 * @returns {string} my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열
 */

const solution = (my_string, indices) => {
    return [...my_string].filter((_, i) => !indices.includes(i)).join("");
};

// test cases
console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3])); // "programmers"
