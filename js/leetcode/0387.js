// 387. First Unique Character in a String

const firstUniqChar = (s) => {
    const obj = {};

    for (let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) {
            obj[s[i]] = [1, i];
        } else {
            obj[s[i]][0]++;
        }
    }

    for (const char of s) {
        if (obj[char][0] === 1) return obj[char][1];
    }

    return -1;
};
