// 680. Valid Palindrome II

/**
 * @param {string} s
 * @return {boolean}
 */

var validPalindrome = function (s) {
    if (s.length <= 2) return true;

    // just check this is palindrome
    const isPalindrome = (str, l, r) => {
        while (l < r) {
            if (str[l] !== str[r]) return false;
            l++, r--;
        }

        return true;
    };

    let [left, right] = [0, s.length - 1];

    while (left < right) {
        // if found index that not accord
        if (s[left] !== s[right]) {
            // chekc this is palindrome after jumped that index
            return (
                isPalindrome(s, left + 1, right) ||
                isPalindrome(s, left, right - 1)
            );
        }

        left++, right--;
    }

    return true;
};
