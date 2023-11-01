// Lv.4 [3차] 자동완성

/**
 *
 * @param {string[]} words
 * @returns {number} 총 입력해야 할 문자의 수
 */

class Trie {
    constructor() {
        this.root = {};
    }

    insert(word) {
        let curr = this.root;

        for (const c of word) {
            // 단어를 삽입할 때마다 문자의 카운트도 같이 계산함
            if (!curr[c]) curr[c] = { rest: 1 };
            else curr[c].rest++;

            curr = curr[c];
        }

        curr.isWord = true;
    }

    checkCount(word) {
        let currChar = this.root;
        let currCount = 0;

        for (const c of word) {
            // 남은 단어가 1개라면 현재 카운트 반환
            if (currChar.rest === 1) return currCount;

            currChar = currChar[c];
            currCount++;
        }

        // 모두 순회해야하는 단어
        return word.length;
    }
}

function solution(words) {
    const trie = new Trie();

    words.forEach((word) => trie.insert(word));
    return words.reduce((pre, cur) => pre + trie.checkCount(cur), 0);
}
