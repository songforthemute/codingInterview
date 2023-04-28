// Lv. 0 꼬리 문자열

/**
 * @param {string[]} str_list 문자열들이 담긴 리스트
 * @param {string} ex 제외하려는 문자열
 * @returns {string} tr_list에서 ex를 포함한 문자열을 제외하고 만든 꼬리 문자열
 */

const solution = (str_list, ex) => {
    return str_list.filter((v) => !v.includes(ex)).join("");
};

// test cases
console.log(solution(["abc", "def", "ghi"], "ef")); // "abcghi"
console.log(solution(["abc", "bbc", "cbc"], "c")); // ""
