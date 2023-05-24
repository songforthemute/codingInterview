// Lv. 0 공백으로 구분하기 2

/**
 * @param {string} my_string 단어가 공백 한 개 이상으로 구분되어 있는 문자열
 * @returns {string[]} my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열
 */

const solution = (my_string) => {
    return my_string.split(" ").filter((v) => v !== "");
};

// test cases
console.log(solution(" i    love  you")); // ["i", "love", "you"]
console.log(solution("    programmers  ")); // 	["programmers"]
