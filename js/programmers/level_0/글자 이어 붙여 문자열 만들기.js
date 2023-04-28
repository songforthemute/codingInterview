// Lv. 0 글자 이어 붙여 문자열 만들기.js

/**
 * @param {string} my_string 문자열
 * @param {number[]} index_list 정수 배열
 * @returns {string} my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열
 */

const solution = (my_string, index_list) => {
    return index_list.map((v) => my_string[v]).join("");
};

// test cases
console.log(
    solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7])
); // "programmers"
console.log(solution("zpiaz", [1, 2, 0, 0, 3])); // "pizza"
