// Lv. 0 가위바위보

/**
 * @param {string} rsp
 * @returns {string}
 */

const solution = (rsp) => {
    return rsp
        .split("")
        .map((v) => (v === "2" ? "0" : v === "0" ? "5" : "2"))
        .join("");
};
