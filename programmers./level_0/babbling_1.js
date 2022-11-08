// Lv. 0 옹알이 (1)

/**
 * @param {string[]} babbling
 * @returns {number}
 */

const solution = (babbling) => {
    let count = 0;

    for (const word of babbling) {
        let buffer = "";

        for (const char of word) {
            buffer += char;
            if (
                buffer.length &&
                (buffer === "aya" ||
                    buffer === "ye" ||
                    buffer === "woo" ||
                    buffer === "ma")
            ) {
                buffer = "";
            }
        }
        if (!buffer.length) count++;
    }

    return count;
};
