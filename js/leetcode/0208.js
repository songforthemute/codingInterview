// 208. Implement Trie (Prefix Tree) - Medium

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var Trie = function () {
    this.trie = {};
    this.isWord = false;
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    if (typeof word !== "string") return;

    let curr = this.trie;

    for (let i = 0; i < word.length; i++) {
        const char = word[i];

        // if the current char is not existed, create new Trie branch
        if (!curr[char]) curr[char] = new Trie();

        // if the current char is not last char of word,
        // replace current ref to the ref of sub-trie
        if (i < word.length - 1) curr = curr[char].trie;
        // else, replace current ref to the ref of curr-trie
        else curr = curr[char];
    }

    // if the loop of word is ended, mark the word's last char
    curr.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    if (typeof word !== "string" || !this.trie) return false;

    let curr = this.trie;

    for (let i = 0; i < word.length; i++) {
        const char = word[i];

        // if curr[char] is not existed, return false
        if (!curr) return false;

        if (i < word.length - 1) curr = curr[char]?.trie;
        else curr = curr[char];
    }

    // if be not existed anything or is not a word, return false
    return curr?.isWord ?? false;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    if (typeof prefix !== "string" || !this.trie) return false;

    let curr = this.trie;

    for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];

        if (!curr) return false;

        curr = curr[char]?.trie;
    }

    // if be existed anything, return true
    return !!curr;
};
