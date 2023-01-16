// Lv. 0 암호 해독

/**
 * @param {string} cipher
 * @param {number} code
 * @returns {string}
 */

const solution = (cipher, code) => {
    return cipher
        .split("")
        .filter((v, i) => (i + 1) % code === 0)
        .join("");
};
