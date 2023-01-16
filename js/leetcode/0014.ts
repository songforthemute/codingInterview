// 14. Longest Common Prefix
function longestCommonPrefix(strs: string[]): string {
    const sorted = strs.sort();
    let output = sorted[0];

    for (let i = 1; i < strs.length; ) {
        if (!strs[i].startsWith(output)) {
            output = output.slice(0, -1);
            if (!output.length) return output;
        } else {
            i++;
        }
    }

    return output;
}
