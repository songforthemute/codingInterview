// 128. Longest Consecutive Sequence
const longestConsecutive = (nums) => {
    if (nums.length <= 1) return nums.length;

    let result = 0;
    const set = nums.sort((a, b) => a - b);
    let cnt = 1;

    for (let i = 0; i < set.length; i++) {
        if (set[i] + 1 === set[i + 1]) cnt++;
        else if (set[i] === set[i + 1]) continue;
        else {
            result = Math.max(result, cnt);
            cnt = 1;
        }
    }

    return result > cnt ? result : cnt;
};
