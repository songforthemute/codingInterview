// Lv. 0 문자열 잘라서 정렬하기

/**
 * @param {string} myString 문자열
 * @returns {FunctionStringCallback[]} "x"를 기준으로 해당 문자열을 잘라내 배열을 만든 후 사전순으로 정렬한 배열
 */

const solution = (myString) => {
    return myString
        .split("x")
        .filter((v) => v.length)
        .sort();
};

// test cases
console.log(solution("axbxcxdx")); // ["a","b","c","d"]
console.log(solution("dxccxbbbxaaaa")); // ["aaaa","bbb","cc","d"]
