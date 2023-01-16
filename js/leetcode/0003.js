// 3. Longest Substring Without Repeating Characters
const lengthOfLongestSubstring = (s) => {
    let map = {};
    let max = 0;
    let left = 0,
        right = 0;

    while (left < s.length && right < s.length) {
        if (!map[s[right]]) {
            map[s[right]] = true;
            right++;
        } else if (map[s[right]]) {
            map[s[left]] = false;
            left++;
        }

        if (max < right - left) max = right - left;
    }

    return max;
};
