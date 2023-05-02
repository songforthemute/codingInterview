// Lv. 0 문자열 섞기

/**
 * @param {string} str1 문자열
 * @param {string} str2 문자열
 * @returns {string} 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열
 */

const solution = (str1, str2) => {
    return [...str1].map((_, i) => str1[i] + str2[i]).join("");
};

// test cases
console.log(solution("aaaaa", "bbbbb")); // "ababababab"
