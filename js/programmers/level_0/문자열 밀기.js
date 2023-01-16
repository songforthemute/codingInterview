// Lv. 0 문자열 밀기

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */

const solution = (A, B) => {
    if (A === B) return 0;

    for (let i = 1; i <= A.length; i++) {
        let pushed = [...A.slice(i), ...A.slice(0, i)].join("");

        if (pushed === B) return A.length - i;
    }

    return -1;
};
