/**
 * @param {string} s given string
 * @return {string} return the longest palindromic substring in `s`
 */

var longestPalindrome = function (s) {
    if (s.length === 1) return s;

    let left = 0,
        right = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j of [i, i + 1]) {
            let [l, r] = [i, j];

            while (s[l] && s[l] === s[r]) {
                if (r - l >= right - left) {
                    left = l;
                    right = r;
                }

                l--, r++;
            }
        }
    }

    return s.substring(left, right + 1);
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
