// 6 kyu: WeIrD StRiNg CaSe
function toWeirdCase(string) {
    const sliced = string.split(" ");
    const result = [];

    for (const word of sliced) {
        let buffer = "";
        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) buffer += word[i].toUpperCase();
            else buffer += word[i];
        }
        result.push(buffer);
    }

    return result.join(" ");
}
