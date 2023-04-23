// Lv. 0 공백으로 구분하기 1

/**
 * @param {string} my_string 단어가 공백 한 개로 구분되어 있는 문자열
 * @returns {string[]} my_string에서 나온 단어를 앞에서부터 순서대로 담은 문자열 배열
 */

const solution = (my_string) => {
    return my_string.split(" ");
};

// test cases
console.log(solution("I love you")); // ["I", "love", "you"]
console.log(solution("programmers")); // ["programmers"]
