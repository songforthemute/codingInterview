// Lv. 0 l로 만들기

/**
 * @param {string} myString 알파벳 소문자로 이루어진 문자열
 * @returns {string} 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열
 */

const solution = (myString) => {
    return [...myString]
        .map((v) => (v.charCodeAt(0) < "l".charCodeAt(0) ? "l" : v))
        .join("");
};

// test cases
console.log(solution("abcdevwxyz")); // "lllllvwxyz"
console.log(solution("jjnnllkkmm")); // "llnnllllmm"
