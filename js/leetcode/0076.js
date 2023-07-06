// 76. Minimum Window Substring

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function (s, t) {
    if (s.length < t.length) return "";

    // init hash table
    const map = {};
    for (const char of t) map[char] = (map[char] || 0) + 1;

    // for sliding window
    let [l, r] = [0, 0];

    let required = Object.keys(map).length;
    let sub = ""; // result

    while (r < s.length) {
        const rC = s[r];
        map[rC]--;

        if (map[rC] === 0) required--;

        while (!required) {
            if (!sub || sub.length > r - l + 1) {
                sub = s.slice(l, r + 1);
            }

            const lC = s[l];

            if (map[lC] === 0) {
                required++;
            }

            map[lC]++;
            l++;
        }

        r++;
    }

    return sub;
};
