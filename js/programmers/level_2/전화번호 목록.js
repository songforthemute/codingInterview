// Lv.2 전화번호 목록

/**
 * @param {string[]} phone_book 전화번호부에 적힌 전화번호를 담은 배열
 * @returns {boolean} 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false
 */

class Trie {
    constructor() {
        this.root = {};
    }

    insert(word) {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            // 이미 접두어가 가능한 단어가 등록되어 있는 경우 반환
            if (node.isWord) return false;
            // 해당 철자가 없다면 새로 생성
            if (!node[char]) node[char] = {};

            node = node[char];
        }

        node.isWord = true;
        // 구분을 위해 등록 성공시 true 반환
        return true;
    }
}

function solution(phone_book) {
    phone_book.sort((a, b) => a.length - b.length);

    const t = new Trie();

    for (const n of phone_book) {
        if (t.insert(n) === false) return false;
    }

    return true;
}
