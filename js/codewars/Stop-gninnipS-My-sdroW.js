// 6 kyu: Stop gninnipS My sdroW!
function spinWords(string) {
    const sliced = string.split(" ");
    const result = [];

    for (const word of sliced) {
        if (word.length >= 5) result.push(word.reverse());
        else result.push(word);
    }

    return result.join(" ");
}
