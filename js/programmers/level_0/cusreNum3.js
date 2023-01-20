// Lv. 0 저주의 숫자 3

/**
 * @param {number} n
 * @return {number}
 */

const solution = (n) => {
    if (n < 3) return n;

    let count = 2;
    let current = 2;

    while (count !== n) {
        current++;

        if (!String(current).includes("3") && current % 3 !== 0) {
            count++;
        }
    }

    return current;
};
