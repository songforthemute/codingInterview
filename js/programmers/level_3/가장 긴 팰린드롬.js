// Lv. 3 가장 긴 팰린드롬

/**
 * @param {string} s 문자열
 * @return {number} `s`의 부분문자열 중 가장 긴 팰린드롬의 길이
 */

const solution = (s) => {
    if (s.length === 1) return 1;

    // will record
    let max = 1;

    for (let i = 0; i < s.length; i++) {
        // [i, i] => odd palindrome case, [i, i+1] => even palindrome case
        for (let j of [i, i + 1]) {
            let [l, r] = [i, j];

            // s[i] is exist && s[i] === s[r]
            while (s[l] && s[l] === s[r]) {
                // if current palindrome is longer
                if (r - l + 1 > max) max = r - l + 1;

                // expand palindrome range
                l--, r++;
            }
        }
    }

    return max;
};

// test cases
console.log(solution("abcdcba")); // 7
console.log(solution("abacde")); // 3
console.log(solution("abbab")); // 4
