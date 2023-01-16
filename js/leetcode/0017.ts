// 17. Letter Combinations of a Phone Number
function letterCombinations(digits: string): string[] {
    if (!digits.length) return [];

    const result = [];
    const map = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    };

    const DFS = (data: string, idx: number) => {
        if (data.length === digits.length) {
            result.push(data);
            return;
        }

        for (const char of map[digits[idx]]) {
            DFS(data + char, idx + 1);
        }
    };

    DFS("", 0);

    return result;
}
