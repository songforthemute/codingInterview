// 125. Valid Palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s.length === 1) return true;

    s = [...s.toLowerCase()].filter((v) => {
        const code = v.charCodeAt(0);
        return (
            (48 <= code && code <= 57) ||
            (65 <= code && code <= 90) ||
            (97 <= code && code <= 122)
        );
    });

    let [left, right] = [0, s.length - 1];

    while (left < right) {
        if (s[left++] !== s[right--]) return false;
    }

    return true;
};
