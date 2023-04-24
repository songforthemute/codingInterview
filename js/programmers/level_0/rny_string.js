// Lv. 0 rny_string

/**
 * @param {string} rny_string 문자열
 * @returns {string} `rny_string`의 모든 `m`을 `rn`으로 바꾼 문자열
 */

const solution = (rny_string) => {
    return [...rny_string].map((v) => (v === "m" ? "rn" : v)).join("");
};

// test cases
console.log(solution("masterpiece")); // rnasterpiece
console.log(solution("programmers")); //  prograrnrners
console.log(solution("jerry")); // jerry
console.log(solution("burn")); // burn
