// 763. Partition Labels

/**
 *
 * @param {string} s
 * @returns {number[]}
 */

function partitionLabels(s) {
    const result = [];
    const charset = [];

    // 'a'.charCodeAt(0) === 97
    for (let i = 0; i < s.length; i++) {
        charset[s.charCodeAt(i) - 97] = i;
    }

    let low = 0;
    let high = 0;

    for (let i = 0; i < s.length; i++) {
        if (high < charset[s.charCodeAt(i) - 97]) {
            high = charset[s.charCodeAt(i) - 97];
        }

        if (i === high) {
            result.push(++high - low);
            low = high;
        }
    }

    return result;
}
