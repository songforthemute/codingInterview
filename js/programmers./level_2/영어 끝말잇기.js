// Lv.2 영어 끝말잇기

/**
 * @param {number} n
 * @param {string[]} words
 * @returns {[number, number]}
 */

function solution(n, words) {
    let turn;
    let nowPlayer;
    let lastChar = words[0][0];
    const record = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        turn = Math.floor(i / n) + 1;
        nowPlayer = (i % n) + 1;

        if (word[0] !== lastChar) return [nowPlayer, turn];
        if (record.includes(word)) return [nowPlayer, turn];
        else {
            record.push(word);
            lastChar = word[word.length - 1];
        }
    }

    return [0, 0];
}
