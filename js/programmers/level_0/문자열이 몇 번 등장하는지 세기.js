// Lv. 0 문자열이 몇 번 등장하는지 세기

/**
 * @param {string} myString 문자열
 * @param {string} pat 문자열
 * @returns {number} myString에서 pat이 등장하는 횟수를 return
 */

const solution = (myString, pat) => {
    return [...myString].reduce(
        (pre, _, idx) => pre + (myString.slice(idx, idx + pat.length) === pat),
        0
    );
};

// test cases
console.log(solution("banana", "ana")); // 2
console.log(solution("aaaa", "aa")); // 3
