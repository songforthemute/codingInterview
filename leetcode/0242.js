// 242. Valid Anagram

const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    const box = {};

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            if (!box[s[i]]) box[s[i]] = 1;
            else box[s[i]]++;
            if (!box[t[i]]) box[t[i]] = -1;
            else box[t[i]]--;
        }
    }

    for (elem in box) {
        if (box[elem] !== 0) return false;
    }

    return true;
};
