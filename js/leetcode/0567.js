// 567. Permutation in String

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function (s1, s2) {
    if (s1 === "" || s2 === "" || s1.length > s2.length) return false;

    const arr = Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        arr[s1.charCodeAt(i) - 97]++;
        arr[s2.charCodeAt(i) - 97]--;
    }

    if (arr.every((v) => v === 0)) return true;

    for (let i = s1.length; i < s2.length; i++) {
        arr[s2.charCodeAt(i) - 97]--;
        arr[s2.charCodeAt(i - s1.length) - 97]++;

        if (arr.every((v) => v === 0)) return true;
    }

    return false;
};
