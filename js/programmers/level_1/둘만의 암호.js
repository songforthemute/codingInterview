// Lv. 1 둘만의 암호

/**
 * @param {string} s 문자열1
 * @param {string} skip 문자열2
 * @param {number} index 건너뛸 문자의 수
 * @return {string} 규칙대로 s를 변환한 결과
 */

const solution = (s, skip, index) => {
    const dict = new Map();

    for (const char of skip) dict.set(char.charCodeAt(0), true);

    return s
        .split("")
        .map((v) => {
            let code = v.charCodeAt(0);

            for (let i = 0; i < index; i++) {
                if (++code === 123) code = 97; // go back to A
                if (dict.has(code)) i--; // jump that character
            }

            return String.fromCharCode(code);
        })
        .join("");
};

// test cases
console.log(solution("aukks", "wbqd", 5)); // happy
console.log(solution("xyzabc", "defghi", 6)); // jklmno
