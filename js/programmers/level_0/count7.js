// Lv. 0 7의 개수

/**
 * @param {number[]} array
 * @returns {number}
 */

const solution = (array) => {
    return array
        .map((v) => `${v}`)
        .join("")
        .split("")
        .filter((v) => v === "7").length;
};
