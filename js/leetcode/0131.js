// 131. Palindrome Partitioning

/**
 * @param {string} s
 * @return {string[][]}
 */

const partition = (s) => {
    if (s.length === 1) return [[s]];

    const result = [];
    const isPalindrome = (str) => {
        if (str.length === 1) return true;
        let reversed = "";
        for (let i = str.length - 1; i >= 0; i--) reversed += str[i];
        return str === reversed;
    };
    const permutation = (arr, str) => {
        if (!str.length) result.push(arr);

        for (let i = 1; i <= str.length; i++) {
            const subStr = str.slice(0, i);

            if (isPalindrome(subStr)) {
                permutation([...arr, subStr], str.slice(i));
            }
        }
    };

    permutation([], s);
    return result;
};
