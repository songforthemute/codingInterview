// 7kyu: Get the Middle Character
function getMiddle(s: string): string {
    if (s.length <= 2) return s;

    return s.length % 2 !== 0
        ? s[(s.length - 1) / 2]
        : s[(s.length - 2) / 2] + s[s.length / 2];
}

function duplicateEncode3(word: string): string {
    return word
        .toLowerCase()
        .split("")
        .map((a, i, w) => {
            return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
        })
        .join("");
}
