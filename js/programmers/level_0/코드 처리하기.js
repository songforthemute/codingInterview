// Lv. 0 코드 처리하기

/**
 * @param {string} code 문자열
 * @returns {string} 문자열 code를 통해 만들어진 문자열 ret를 return
 */

const solution = (code) => {
    let mode = 0;
    let result = "";

    const addChar = (char) => {
        result += char;
    };

    for (let i = 0; i < code.length; i++) {
        if (mode === 0) {
            if (code[i] === "1") mode = 1;
            else if (i % 2 === 0) addChar(code[i]);
        } else {
            if (code[i] === "1") mode = 0;
            else if (i % 2 !== 0) addChar(code[i]);
        }
    }

    return result.length ? result : "EMPTY";
};

// test cases
console.log(solution("abc1abc1abc")); // "acbac"
