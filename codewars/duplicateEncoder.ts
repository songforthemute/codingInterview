// 6kyu: Duplicate Encoder
function duplicateEncode(word: string): string {
    const splitted: string[] = word.toLowerCase().split("");

    const result: string[] = [];
    splitted.forEach((e: string) =>
        result.push(word.toLowerCase().split(e).length - 1 <= 1 ? "(" : ")")
    );

    return result.join("");
}

function duplicateEncode2(word: string): string {
    const box: { [key: string]: number } = {};
    const word_lower: string = word.toLowerCase();
    let result: string = "";

    for (const e of word_lower) {
        box[e] = !box[e] ? 1 : ++box[e];
    }

    for (const e of word_lower) {
        result += box[e] === 1 ? "(" : ")";
    }

    return result;
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
