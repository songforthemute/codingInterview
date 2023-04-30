// Lv. 0 접미사 배열

/**
 * @param {string} my_string 문자열
 * @returns {string[]} my_string의 모든 접미사를 사전순으로 정렬한 문자열 배열
 */

const solution = (my_string) => {
    return [...my_string].map((_, i, arr) => arr.slice(i).join("")).sort();
};

// test cases
console.log(solution("banana")); // ["a", "ana", "anana", "banana", "na", "nana"]
console.log(solution("programmers")); // ["ammers", "ers", "grammers", "mers", "mmers", "ogrammers", "programmers", "rammers", "rogrammers", "rs", "s"]
