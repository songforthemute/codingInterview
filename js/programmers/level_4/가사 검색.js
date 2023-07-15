// Lv. 4 가사 검색

/**
 * @param {string[]} words 가사에 사용된 모든 단어들이 담긴 배열
 * @param {string[]} queries 찾고자 하는 키워드가 담긴 배열
 * @returns {number[]} 각 키워드 별로 매치된 단어가 몇 개인지 순서대로 담은 배열
 */

class Trie {
    constructor() {
        this.characters = {};
        this.count = 0;
    }

    add(word) {
        let curr = this;

        for (const char of word) {
            if (!curr.characters[char]) curr.characters[char] = new Trie();

            curr.count++;
            curr = curr.characters[char];
        }
    }

    find(word) {
        let curr = this;

        for (const char of word) {
            if (char === "?") return curr.count;
            if (!curr.characters[char]) return 0;

            curr = curr.characters[char];
        }
    }
}

function solution(words, queries) {
    // implementation reverse
    String.prototype.reverse = function () {
        return this.split("").reverse().join("");
    };

    const trie = {};
    const reverse = {}; // for bactracking of words starting from '?'

    for (const word of words) {
        // when contructing a Trie, hash this Trie by using the word's length.
        const { length: len } = word;

        if (!trie[len]) {
            trie[len] = new Trie();
            reverse[len] = new Trie();
        }

        trie[len].add(word);
        reverse[len].add(word.reverse());
    }

    return queries.map(
        (query) =>
            (query[0] === "?"
                ? reverse[query.length]?.find(query.reverse())
                : trie[query.length]?.find(query)) || 0 // if cannot find this word's length in hash
    );
}

// Test Cases
console.log(
    solution(
        ["frodo", "front", "frost", "frozen", "frame", "kakao"],
        ["fro??", "????o", "fr???", "fro???", "pro?"]
    )
); // [3,2,4,1,0]
