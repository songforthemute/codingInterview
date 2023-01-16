// Lv. 1 옹알이 (2)

/**
 * @param {string[]} babbling
 * @returns {number}
 */

function solution(babbling) {
    let count = 0;

    for (const word of babbling) {
        let buffer = "";
        let record = "";

        for (const char of word) {
            buffer += char;
            if (
                buffer.length &&
                buffer !== record &&
                (buffer === "aya" ||
                    buffer === "ye" ||
                    buffer === "woo" ||
                    buffer === "ma")
            ) {
                record = buffer;
                buffer = "";
            }
        }
        if (!buffer.length) count++;
    }

    return count;
}
