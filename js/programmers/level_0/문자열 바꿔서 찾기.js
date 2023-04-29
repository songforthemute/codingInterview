// Lv. 0 A 강조하기

/**
 * @param {string} myString 문자 "A"와 "B"로 이루어진 문자열1
 * @param {string} pat 문자 "A"와 "B"로 이루어진 문자열2
 * @returns {number} myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 pat이 있으면 1을 아니면 0
 */

const solution = (myString, pat) => {
    return Number(
        [...myString]
            .map((v) => (v === "A" ? "B" : "A"))
            .join("")
            .includes(pat)
    );
};

// test cases
console.log(solution("ABBAA", "AABB")); // 1
console.log(solution("ABAB", "ABAB")); // 0
