// Lv. 0 대문자와 소문자

/**
 * @param {string} my_string
 * @returns {string}
 */

const solution = (my_string) => {
    return my_string
        .split("")
        .map((char) =>
            char === char.toUpperCase()
                ? char.toLowerCase()
                : char.toUpperCase()
        )
        .join("");
};
