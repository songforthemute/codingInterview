// Lv. 0 외계행성의 나이

/**
 * @param {number} age
 * @return {string}
 */

const solution = (age) => {
    return String(age)
        .split("")
        .map((v) => String.fromCharCode(String(Number(v) + 97)))
        .join("");
};
