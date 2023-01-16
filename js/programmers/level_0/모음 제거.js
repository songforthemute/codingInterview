// Lv. 0 모음 제거

/**
 * @param {string} my_string
 * @returns {string}
 */

const solution = (my_string) => {
    const arr = [];

    for (const char of my_string) {
        if (
            char !== "a" &&
            char !== "e" &&
            char !== "o" &&
            char !== "i" &&
            char !== "u"
        )
            arr.push(char);
    }

    return arr.join("");
};
