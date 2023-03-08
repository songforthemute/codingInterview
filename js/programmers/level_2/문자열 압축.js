// Lv. 2 문자열 압축

/**
 * @param {string} s 압축할 문자열
 * @return {number} 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이
 */

const solution = (s) => {
    if (s.length === 1) return 1;

    const compressByUnit = (unit) => {
        const result = [];
        let count = 1;

        for (let i = 0; i <= s.length / unit; i++) {
            // Unit: 1(1, 2, 3...) / 2(2, 4, 6...) / 3(3, 6, 9...) / ...
            const sliced = s.slice(unit * i, unit * (i + 1));

            // same character
            if (result[result.length - 1] === sliced) count++;
            // differ character
            else {
                if (count >= 2) {
                    result[result.length - 1] =
                        `${count}` + result[result.length - 1];
                }

                result.push(sliced);
                count = 1;
            }
        }

        return result.join("").length;
    };

    let min = Infinity;

    // first filtering
    for (let i = 1; i < s.length; i++) {
        let current = compressByUnit(i);

        min = min > current ? current : min;
    }

    return min;
};

// test cases
console.log(solution("aabbaccc")); // 7
console.log(solution("ababcdcdababcdcd")); // 9
console.log(solution("abcabcdede")); // 8
console.log(solution("abcabcabcabcdededededede")); // 14
console.log(solution("xababcdcdababcdcd")); // 17
