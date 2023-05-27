// Lv. 0 두 수의 합

/**
 * @param {string} a 0 이상의 정수
 * @param {string} b 0 이상의 정수
 * @returns {string} a + b의 값을 문자열로 return
 */

const solution = (a, b) => {
    return `${BigInt(a) + BigInt(b)}`;
};

// test cases
console.log(solution("582", "734")); // "1316"
console.log(solution("18446744073709551615", "287346502836570928366")); // "305793246910280479981"
